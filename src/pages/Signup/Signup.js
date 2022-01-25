import React from "react";
import FormLayout from "../../components/FormLayout/FormLayout";
import SignupForm from "../../components/passenger/SignupForm/SignupForm";

const Signup = () => {
  return (
    <FormLayout btnText="Signup as Driver">
      <SignupForm />
    </FormLayout>
  );
};

export default Signup;
