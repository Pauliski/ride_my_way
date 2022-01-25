import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../../../element/Input";
import Passport from "../../../pictures/pass1.png";
import "./DriverEditProfileCard.css";
import { updateDriver, getDriver} from "../../../store/actions/types/driverAction";


function DriverEditProfileCard() {
  const user = useSelector((state) => state.driver);
  const [data, setData] = useState({})
  const [names, setNames] = useState({...user});
  const [disabled, setDisabled] = useState(true);
  const [valid, setValid] = useState({firstName: true, lastName: true})
  const [innerText, setInnerText] = useState("Edit");
  const dispatch = useDispatch();
  const nameError = /^[a-zA-Z]{2,}$/;
 

  const handleChange = (e) => {
  
    
    const { name, value } = e.target;
    setNames((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setValid((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
    // console.log(names)
  };

  const handleBlur = (e)=>{
    const {name, value} = e.target
    setValid((prev) => {
      return {
        ...prev,
        [name]: nameError.test(value),
      };
    });
  }
  const handleEdit = (e) => {
    e.preventDefault()
    if(innerText === "Edit" ){
      setInnerText("Save") 
   setDisabled(false)
    }
    

    if (e.target.innerText === "Save"){
      console.log('name = ', names)
      setInnerText("Edit") 
      updateDriver(names, dispatch);
      setDisabled(true);
    } 
    
  };
    useEffect(() => {
    const fetchUser = async () => {
      const userOnload = await getDriver();
      const { firstName, lastName } = userOnload;
      setData(userOnload)
      setNames(prev =>({...prev, firstName, lastName }));
      // console.log(valid
    };
    fetchUser();
  },[]);
  return (
    
      <div className="profile-container">
        <div className="personal-profile">
        <div className="profile-image-conatainer">
              <img src={Passport} className="profile-image" alt="" />
            </div>
            <div className="form-container">
              <form >
              <span>First Name</span>
              <div
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {!valid.firstName ? "Invalid first name" : ""}
              </div>
                <Input
                    id="profile-input"
                    className={`input-new-class ${disabled ? "" : "input-disabled-false"}`}
                    Value={names.firstName}
                    disabled={disabled}
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   <span>Last Name</span>
                   <div
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {!valid.lastName ? "Invalid last name" : ""}
              </div>
                <Input
                    id="profile-input"
                    Value={names.lastName}
                    className={`input-new-class ${disabled ? "" : "input-disabled-false"}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={disabled}
                    name="lastName"
                  />

                  <span>Email</span>
                <Input
                    id="profile-input"
                    className="input-new-class"
                    Value={user.email}
                    disabled={true}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   <span>Mobile Number</span>
                <Input
                    id="profile-input"
                    Value={data.mobileNumber}
                    className="input-new-class"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={true}
                    name="mobileNumber"
                  />
                   <span>Car Plate Number</span>
                <Input
                    id="profile-input"
                    Value={data.carPlate}
                    className="input-new-class"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={true}
                    name="mobileNumber"
                  />
                  <div style={{display:'flex', justifyContent: 'center'}}>
                    <button className="edit-name-button" onClick={handleEdit}>
                {innerText}
              </button>
                  </div>
                  
              </form>
            
            </div>
         
        </div>
      </div>
    
  );
}

export default DriverEditProfileCard;
