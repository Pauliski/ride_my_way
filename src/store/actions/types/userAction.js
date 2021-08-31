
import axios from "axios";
import { currentUser, setError } from "../../../features/passenger/userSlice";
import swal from 'sweetalert';

export const RegisterUser = async (userData, dispatch, history) => {
  // const dispatch = useDispatch();
  console.log(userData, dispatch, history);
  try {
    
    const response = await axios({
      method: "post",
      baseURL: "http://localhost:3000/v1/passenger/register",
      data: userData,
    });
    if (response.status === 201) {
      console.log(response.data)
      const token = response.data.signedToken;
      localStorage.setItem("jwtToken", token);
      dispatch(currentUser({firstName: userData.firstName, lastName: userData.lastName, email: userData.email}))
      history.push("/dashboard");
    }
    
  } catch (err) {
    // dispatch(setError({error: err.response.data.message}))
    console.log(err.response.data)
  }
};

export const LoginUser = async (userData, dispatch, history) => {
  console.log(userData);
  try {
    const res = await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      baseURL: "http://localhost:3000/v1/passenger/login",
      data: userData,
    });
    if (res.status === 200) {
      console.log(res)
      const token = res.data.signedToken;
      localStorage.setItem("jwtToken", token);
      dispatch(currentUser({...res.data.passenger}))
      history.push("/dashboard");
    }
  
    
  } catch (error) {
    
    console.log(error.response)
  }
  
  
};

export const updateUser = async (names, email, dispatch)=>{
  console.log(names);
  try {
    const token = localStorage.getItem('jwtToken');
  const response = await axios({
    method: "put",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    baseURL: "http://localhost:3000/v1/passenger",
    data: {...names},
  });
  if (response.status === 200) {
    console.log('name ====>', {...names, email})
    dispatch(currentUser({...names, email}));
  }
  } catch (error) {
    console.log(error.response)
  }
  
}

// export const getParticularUser = async (names, email, dispatch)=>{
//   console.log(names);
//   try {
//     const token = localStorage.getItem('jwtToken');
//   const response = await axios({
//     method: "put",
//     headers: {
//       "Authorization": `Bearer ${token}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     baseURL: "http://localhost:3000/v1/passenger",
//     data: {...names},
//   });
//   if (response.status === 200) {
//     dispatch(currentUser({...names, email}));
//   }
//   } catch (error) {
//     console.log(error.response)
//   }
  
// }

export const getUser = async (dispatch)=>{
  const token = localStorage.getItem('jwtToken');
  try {
         const userFromDatabase = await axios.get(
      `http://localhost:3000/v1/passenger`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(userFromDatabase.status=== 200){
      console.log(userFromDatabase.data.passenger)
        dispatch(currentUser({...userFromDatabase.data.passenger}))
        return userFromDatabase.data.passenger

    }
  } catch (error) {
      console.log(error.response)
  }

}

export const joinRide = async (id) => {
  let token = localStorage.getItem('jwtToken')
  console.log(token)
  try {
    const res = await axios.post(
      `http://localhost:3000/v1/join-ride/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      swal({
        title: "Request Recieved and Being Process",
        text: "Please wait for your driver confirmation",
        icon: "success",
        buttons:{
          confirm: "OK"
        }
        })
      console.log(res.data);
      
    }
  } catch (error) {
    console.log(error.response)
  }
  
};