import React, { useEffect, useState } from "react";
import { Rides } from "../../Array";
import DisplayOffer from "../DisplayOffer/DisplayOffer";
import axios from "axios";
import "./DisplayAllOffers.css";
import { joinRide } from "../../store/actions/types/userAction";

// const joinRide = async (id) => {
//   let token;
//   const response = await axios.post(
//     `http://localhost:3000/v1/join-ride/${id}`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   if (response.status === 201) {
//     console.log(response.data);
//     const token = response.data.signedToken;
//     localStorage.setItem("jwtToken", token);
//     console.log(token);
//     // const decoded = jwt_decode(token);
//     // console.log("decoded ===>", decoded)
//     // dispatch(currentUser(decoded.data));

//     // history.push("/dashboard");
//   }
// };


function DisplayAllOffers() {
  const [rides, setRides] = useState([])
  useEffect(()=>{
    console.log('You')
    const loadOffers = async ()=>{

      const token = localStorage.getItem('jwtToken')
      console.log(token)
      try {
      const res = await axios.get(`http://localhost:3000/v1/display-all-offers`,
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
      )
      if(res.status === 200){
        setRides(res.data.offers)
      }
      console.log(res)
    } catch (err) {
      console.log(err.response)
    }
    }
    loadOffers()
  }, [])
  return (
    <div className="display-all-offers">
      {rides.map((item) => (
        <DisplayOffer
          name={`${item.firstName} ${item.lastName}`}
          amount={item.amount}
          key={item.offerId}
          location={item.location}
          destination={item.destination}
          mobile={item.mobileNumber}
          id={item.offerId}
          joinRide={joinRide}
        />
      ))}
    </div>
  );
}

export default DisplayAllOffers;
