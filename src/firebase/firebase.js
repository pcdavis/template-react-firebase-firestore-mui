import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config";

//Notes: The Firebase class gets constructed with the auth feature to enable the register, login, etc. The firestore db is added to allow you to access firestore anytime you access firebase throughout the app.
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: name
    });
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }
  async logout() {
    await this.auth.signOut();
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
