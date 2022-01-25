import { navigate } from "@reach/router";
import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import validation from './validation'
import { Redirect } from "react-router";
import { DriverRegistration } from "../../../store/actions/types/driverAction";

const useForm = (validates) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const defaultValues ={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    carPlate: "",
    gender: ''
  }

  

  // let errors = {}
  const [values, setValues] = useState(defaultValues);
   const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === values.confirmPassword) {
      const errorMessages = validates(values)
    setErrors(errorMessages)
    }
    setValues({
      ...values,
      [name]: value,
    });
    

  };
  const handleBlur = (e) => {
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
    const errorMessages = validates(values)
    setErrors(errorMessages)
   

  };
  const handleSelectChange = (e)=>{
    const {name, value }= e.target
    setValues({
      ...values,
      [name]: value,
    });
   
    
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  const checkErrors =  Object.keys(errors).length !== 0
    if(checkErrors) return
    DriverRegistration(values, dispatch, history)
  };
 
  useEffect(() => {
    setValues(values)
   
  }, [values])
  
  return {
    handleChange,
    handleFormSubmit,
    handleBlur,
    handleSelectChange,
    values,
    errors,
  };
};
export default useForm;
