export default function validateLogin(values, authType) {
  let errors = {};

  console.log(authType);

  //userName errors
  if (authType === 1 && !values.userName) {
    errors.userName = "A screen name is required";
  }

  //email related errors
  if (!values.email) {
    errors.email = "An email is requied";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  //password related errors
  if (!values.password) {
    errors.password = "A password is required";
  } else if (values.password.length < 6) {
    errors.password = "Passwords must be a minimum of 6 characters";
  }

  return errors;
}
