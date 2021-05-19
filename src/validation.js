const validation = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password1) {
    errors.password1 = "Password is required.";
  } else if (values.password1.length < 5) {
    errors.password1 = "Password must be more than five characters.";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (values.confirmPassword !== values.password1) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone-number is required";
  }
  if (!values.plateNumber) {
    errors.plateNumber = "Plate-number is required";
  }
  // if (!values.registrationNumber) {
  //   errors.regNumber = "Registration-number is required";
  // }
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }
  return errors;
};
export default validation;
