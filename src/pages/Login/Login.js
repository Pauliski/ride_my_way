import React from "react";
import FormLayout from "../../components/FormLayout/FormLayout";
import LoginForm from "../../components/passenger/LoginForm/LoginForm";

const Login = () => {
  return (
    <FormLayout btnText="Login as Driver">
      <LoginForm />
    </FormLayout>
  );
};

export default Login;
