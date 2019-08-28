import React from "react";
import firebase from "../../firebase";

function useAuth() {
  const [authUser, setAuthUser] = React.useState(null); // This creates a state object that can be exported and used throughout the app.

  React.useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      //onAuthStateChanged is a listener that tells us if there is an active firebase user and his details - we MUST unmount it when not using - so we store it in const unsubscribe and return it in the unmount callback at the bottom to clear it out when not used
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return authUser; // this little piece of state gets returned to whoever needs to know if user is authenticated and gives access to the user object
}

export default useAuth;
