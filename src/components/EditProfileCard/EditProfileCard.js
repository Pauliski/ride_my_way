import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../../element/Input";
import Passport from "../../pictures/pass1.png";
import {
  getUser,
  updateUser,
} from "../.../../../store/actions/types/userAction";
import "./EditProfileCard.css";

function EditProfileCard() {
  const user = useSelector((state) => state.user);
  const [valid, setValid] = useState({ firstName: true, lastName: true });
  const [names, setNames] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
  });
  const email = user.email;
  const [disabled, setDisabled] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [innerText, setInnerText] = useState("Edit");
  const dispatch = useDispatch();
  const nameError = /^[a-zA-Z]{2,}[\-]?[a-zA-Z]{1,}$/;

  // ***** handler for when the value of input field is changing *****
  const handleChange = (e) => {
    const { name } = e.target;
    setNames((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
    setValid((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
   
  };

  // ***** handler for when input field is out of focus *****
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setValid((prev) => {
      return {
        ...prev,
        [name]: nameError.test(value),
      };
    });
    const val = Object.values(valid)
    console.log(val)
  };

  // ***** Edit handler for firstName & lastName *****
  const handleEdit = (e) => {
    if (innerText === "Edit") {
      setInnerText("Save");
      setDisabled(false);
    }
    if (innerText === "Save") {
      setInnerText("Edit");
      setDisabled(true);
      updateUser(names, email, dispatch);
    }
    console.log(e.target.innerText);
  };

  // ***** Loading User Information from database *****
  useEffect(() => {
    const fetchUser = async () => {
      const userOnload = await getUser(dispatch);
      console.log(userOnload);
      const { firstName, lastName } = userOnload;
      setNames({ firstName, lastName });
    };
    fetchUser();
  }, []);

  useEffect(()=>{
    const val = Object.values(valid)
    console.log(val, 'val')
    if (val.some((item) => item === false)) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
        
  }, [valid])

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
              <div
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {!valid.firstName ? "Invalid first name" : ""}
              </div>
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

              <div
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {!valid.lastName ? "Invalid last name" : ""}
              </div>
              <div className="personal-info-details">
                <div className="names">Last Name</div>
                <Input
                  id="profile-input"
                  Value={names.lastName}
                  className={disabled ? "" : "input-disabled-false"}
                  disabled={disabled}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastName"
                />
              </div>
              <button className="edit-name-button" onClick={handleEdit} disabled={btnDisabled}>
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

export default EditProfileCard;
