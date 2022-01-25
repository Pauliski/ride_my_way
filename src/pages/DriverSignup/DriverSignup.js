import React from "react";
import DriverRegister from "../../components/driver/DriverRegister/DriverRegister";
import FormLayout from "../../components/FormLayout/FormLayout";

const DriverSignup = () => {
  return (
    <FormLayout btnText="Signup as Passenger">
      <DriverRegister />
    </FormLayout>
  );
};

export default DriverSignup;
