import { createSlice } from '@reduxjs/toolkit'

export const driverSlice = createSlice({
  name: 'AuthDriver',
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    isAuthenticated: false,
    isError: "",
    newOffer: {},
    deletedOffer: {},
    offer: [],
    updatedOffer: {}
  },
  reducers: {
    currentDriver: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.imageUrl = action.payload.imageUrl;
      state.isAuthenticated = true

    },
    setError: (state, action) =>{
      state.isError = action.payload.error
    },
    isLogout: state => {
        state.firstName = '';
        state.lastName = '';
        state.email = '';
        state.newOffer = {}
        state.isError = ''
        state.offer = []
        state.isAuthenticated = false
    },
    setDriverUpdate: state =>{

    },
    setOffer: (state, action) =>{
      state.offer = action.payload.offers;
      state.newOffer = {};
      state.deletedOffer = {};
      state.updatedOffer = {}
    },
    addNewOffer: (state, action) =>{
      state.newOffer = action.payload.offer
    },
    setOfferdeleted: (state, action) =>{
      state.deletedOffer = action.payload.offer
    },
    setOfferUpdate: (state, action) =>{
      state.updatedOffer = action.payload.offer
    }
  }
})

// Action creators are generated for each case reducer function
export const { currentDriver, isLogout, setError, setDriverUpdate, setOffer, addNewOffer, setOfferdeleted, setOfferUpdate } = driverSlice.actions

export default driverSlice.reducer