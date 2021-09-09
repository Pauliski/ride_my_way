import axios from 'axios'
import { addNewOffer, currentDriver, setDriverUpdate, setError, setOffer, setOfferUpdate, setUserUpdate } from "../../../features/passenger/driverSlice";
import jwt_decode from "jwt-decode";
import swal from 'sweetalert';


export const DriverRegistration  = async (userData, dispatch, history)=>{
    console.log(userData)
    try {
    
        const res = await axios({
          method: "post",
          baseURL: "http://localhost:3000/v1/driver/register",
          data: userData,
        });
        if (res.status === 201) {
          console.log(res)
          const token = res.data.signedToken;
          localStorage.setItem("driverToken", token);
          console.log(token)
          const decoded = jwt_decode(token);
          console.log("decoded ===>", decoded.data)
          dispatch(currentDriver(decoded.data));
    
          history.push("/driver/dashboard");
        }
        
      } catch (err) {
        dispatch(setError({error: err.response}))
        console.log(err.response)
      }
}

export const updateDriver = async (names, dispatch)=>{
  // console.log(userData);
  try {
    const token = localStorage.getItem('driverToken');
  const res = await axios({
    method: "put",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    baseURL: "http://localhost:3000/v1/driver",
    data: names,
  });
  if (res.status === 200) {
    // console.log('names === ', names);
    // console.log(res);
    dispatch(currentDriver({...names}))
    dispatch(setDriverUpdate({...names}));
  }

  // const token = response.data.signedToken;
  // axios.defaults.headers.common['Authorization'] = token;
  // setAuthToken(token);
 


  } catch (error) {
    console.log(error.response)
  }
  
}

export const driverLogin = async (userData, dispatch, history) => {
  console.log(userData);
  try {
    const response = await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      baseURL: "http://localhost:3000/v1/driver/login",
      data: userData,
    });
    if (!response.ok) {
      const err = await response;
      console.log("failure: ", err);
      // throw new Error(err);
    }
  
    const token = response.data.signedToken;
    console.log(token)
    const decoded = jwt_decode(token);
    console.log(decoded)
    localStorage.setItem("driverToken", token);
    console.log(decoded.data)
    dispatch(currentDriver(decoded.data));
    history.push("/driver/dashboard");
    // setAuthToken(token);
  
  } catch (error) {
    console.log(error.response)
  }
  
};

export const getHistory =async ()=>{
  const token = localStorage.getItem("driverToken");
  const response = await axios.get(
    `http://localhost:3000/v1/driver/ride-history`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status === 201) {
    console.log(response.data);
    const token = response.data.signedToken;
    localStorage.setItem("jwtToken", token);
    console.log(token);
    // const decoded = jwt_decode(token);
    // console.log("decoded ===>", decoded)
    // dispatch(currentUser(decoded.data));

    // history.push("/dashboard");
  }

}

export const addOfferCall =async (userData, dispatch)=>{
  console.log(userData)
  const token = localStorage.getItem("driverToken");
  try {
    const res = await axios.post(
    `http://localhost:3000/v1/offer`,
    {...userData},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 201) {
    dispatch(addNewOffer( {offer: userData}))
    swal({
      title: "Added!",
      icon: "success"
      })
    console.log(res.data);
    // const decoded = jwt_decode(token);
    // console.log("decoded ===>", decoded)
    // dispatch(currentUser(decoded.data));

    // history.push("/dashboard");
  }
  } catch (error) {
    console.log(error.response)
  }
  

}

export const editOfferCall =async (offerId, data, dispatch)=>{
  console.log(offerId, data)
  const token = localStorage.getItem("driverToken");
  try {
    const res = await axios.put(
    `http://localhost:3000/v1/offer/${offerId}`,
    {...data},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 200) {
    console.log(res.data);
    try {
      const token = localStorage.getItem("driverToken");
          console.log(token);
          const res = await axios.get(
              `http://localhost:3000/v1/offers`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if(res.status === 200){
              dispatch(setOffer({offers: res.data.offers}))
              dispatch(setOfferUpdate({offer: data}))
              swal({
                title: "Updated!",
                icon: "success"
                })
            }
    } catch (error) {
      throw new Error(error.response)
    }
    
   
    // const decoded = jwt_decode(token);
    // console.log("decoded ===>", decoded)
    // dispatch(currentUser(decoded.data));
   
  // history.push("/driver/offer");
     
  }
  } catch (error) {
    console.log(error.response)
  }
  

}

export const deleteOfferCall = async (offerId)=>{
  console.log(offerId)
  const token = localStorage.getItem("driverToken");
  try {
    const res = await axios.delete(
    `http://localhost:3000/v1/offer/${offerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 200) {
    console.log(res.data);
    
    swal({
      title: "Deleted!",
      icon: "success"
      })
    // const decoded = jwt_decode(token);
    // console.log("decoded ===>", decoded)
    // dispatch(currentUser(decoded.data));
   
  // history.push("/driver/offer");
     
  }
  } catch (error) {
    console.log(error.response)
  }
}

export const getdriverOffers = async (dispatch)=>{
  try {
    const token = localStorage.getItem("driverToken");
        console.log(token);
        const res = await axios.get(
            `http://localhost:3000/v1/offers`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if(res.status === 200){
            dispatch(setOffer({offers: res.data.offers}))
          }
  } catch (error) {
    throw new Error(error.response)
  }
} 

export const acceptOffer = async (offerId)=>{
  console.log(offerId)
  const token = localStorage.getItem("driverToken");
  try {
    const res = await axios.get(
    `http://localhost:3000/v1/driver/offer-accepted/${offerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 200) {
    console.log(res.data);
    
    swal({
      title: "Offer Accepted!",
      icon: "success"
      })
     
  }
  } catch (error) {
    console.log(error.response)
  }
}

export const startTrip = async (historyId)=>{
  const token = localStorage.getItem("driverToken");
  try {
    const res = await axios.get(
    `http://localhost:3000/v1/driver/trip-start/${historyId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 200) {
    console.log(res.data);
    
    swal({
      title: "Trip Started",
      icon: "success"
      })
     
  }
  } catch (error) {
    console.log(error.response)
  }
}

export const endTrip = async (historyId)=>{
  const token = localStorage.getItem("driverToken");
  try {
    const res = await axios.get(
    `http://localhost:3000/v1/driver/trip-end/${historyId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 200) {
    console.log(res.data);
    
    swal({
      title: "Trip Completed",
      icon: "success"
      })
     
  }
  } catch (error) {
    console.log(error.response)
  }
}



export const rejectOffer = async (offerId)=>{
  const token = localStorage.getItem("driverToken");
  try {
    const res = await axios.get(
    `http://localhost:3000/v1/driver/offer-rejected/${offerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 200) {
   
     
  }
  } catch (error) {
    console.log(error.response)
  }
}

export const getDriver = async (dispatch)=>{
  const token = localStorage.getItem('driverToken');
  try {
         const userFromDatabase = await axios.get(
      `http://localhost:3000/v1/driver`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(userFromDatabase.status=== 200){
      console.log(userFromDatabase.data.driver)
        dispatch(currentDriver({...userFromDatabase.data.driver}))
        return userFromDatabase.data.driver

    }
  } catch (error) {
      console.log(error.response)
  }

}