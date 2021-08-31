import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../../element/Input";
import Passport from "../../pictures/pass1.png";
import "./DriverEditProfileCard.css";
import { updateDriver, getDriver} from "../../store/actions/types/driverAction";


function DriverEditProfileCard() {
  const user = useSelector((state) => state.driver);
  const [names, setNames] = useState({ firstName: user.firstName, lastName: user.lastName });
  const [disabled, setDisabled] = useState(true);
  const [valid, setValid] = useState({firstName: true, lastName: true})
  const [innerText, setInnerText] = useState("Edit");
  const dispatch = useDispatch();
  const nameError = /^[a-zA-Z]{2,}[\-]?[a-zA-Z]{1,}$/;
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNames((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
    innerText === "Edit" ? setInnerText("Save") : setInnerText("Edit");
    // console.log(e.target.innerText);

    if (e.target.innerText === "Save") updateDriver(names, dispatch);
    setDisabled(!disabled);
  };
    useEffect(() => {
    const fetchUser = async () => {
      const userOnload = await getDriver(dispatch);
      console.log(userOnload);
      const { firstName, lastName } = userOnload;
      setNames(prev =>({...prev, firstName, lastName }));
      console.log(valid)
    };
    fetchUser();
  }, [valid]);
  return (
    <div>
      <div className="profile-container">
        <div className="personal-profile">
          <div className="card-one">
            <div className="profile-image-conatiner">
              <img src={Passport} className="profile-image" alt="" />
            </div>
            <div className="personal-info-container">
              <div>Personal info</div>
              <hr />
              <div className="personal-info-details">
                <div className="names">First Name</div>
                <Input
                  id="profile-input"
                  className={disabled ? "" : "input-disabled-false"}
                  Value={names.firstName}
                  disabled={disabled}
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="personal-info-details">
                <div className="names">Last Name</div>
                <Input
                  id="profile-input"
                  Value={names.lastName}
                  className={disabled ? "" : "input-disabled-false"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={disabled}
                  name="lastName"
                />
              </div>
              <button className="edit-name-button" onClick={handleEdit}>
                {innerText}
              </button>
            </div>
          </div>
          <div className="card-two-three-conatiner">
            <div className="card-two">
              <div className="contact-info">
                <div>Contact Information</div>
                <hr />
                <div className="contact-info-details">
                  <div>Email</div>
                  <button>{user.email}</button>
                </div>
                <div className="contact-info-details">
                  <div>Mobile Number</div>
                  <button>{user.mobileNumber}</button>
                </div>
              </div>
            </div>
            <div className="card-three"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverEditProfileCard;
