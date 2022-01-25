const validation = (values) => {
  let errors = {};
  if (!/^[a-zA-Z\-]{2,}$/.test(values.firstName) && values.firstName !== '') {
    errors.firstName = "Invalid first name eg. John";
  }
  if (!/^[a-zA-Z0-9]+@(gmail||hotmail||yahoo)\.(com)$/.test(values.email) && values.email !== '') {
    errors.email = "Invalid Email";
  } 
  if (!/\w{8,}/.test(values.passord) && values.passord !== '') {
    errors.password1 = "Password is required.";
  } 
  // if (values.confirmPassword !== values.password && values.password !== '') {
  //   errors.confirmPassword = "Passwords do not match";
  // } 
  if (!/^(\+234)?[0-9]{11}$/.test(values.mobileNumber) && values.mobileNumber !== '') {
    errors.phoneNumber = "Phone-number must be minimum of eleven character";
  }
  // if (!values.registrationNumber) {
  //   errors.regNumber = "Registration-number is required";
  // }
  if (!/^[a-zA-Z\-]{2,}$/.test(values.lastName) && values.lastName !== '') {
    errors.lastName = "Last Name is required";
  }
  return errors;
};
export default validation;
