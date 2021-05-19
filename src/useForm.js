import { navigate } from "@reach/router";
import { useState} from "react";
import validation from './validation'
import { Redirect } from "react-router";

const useForm = (validates) => {
  const defaultValues ={
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    confirmPassword: "",
    phoneNumber: "",
    plateNumber: "",
    registrationNumber: ""
  }
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgreeToTerms(!agreeToTerms);
    setValues({
      ...values,
      agreeToTerms,
      [name]: value,
    });

  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //handling errors
    setErrors(validates(values));
    // setValues(defaultValues)
    setIsSubmitting(true);
    const isEmpty = Object.values(values).every(x => (x === null || x === ''));
    console.log(Object.keys(errors).length)
    console.log(errors)
    if(Object.keys(errors).length === 0 && !isEmpty){
      navigate('/driver/signuppages')
    }
    
    //Setting input to initiial state
    console.log(values);
  };
  
  return {
    handleChange,
    handleFormSubmit,
    values,
    errors,
    agreeToTerms,
  };
};
export default useForm;
