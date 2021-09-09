import React, {useEffect, useState} from 'react'
import { addOfferCall } from '../../store/actions/types/driverAction'
import { useDispatch } from 'react-redux'
import './AddOfferForm.css'

function AddOfferForm() {
    const dispatch = useDispatch()
    const [offer, setOffer] = useState({location: '', destination: '', amount: ''})
    const [disabled, setDisabled] = useState(true)
    const [valid, setValid] = useState({location: true, destination: true, amount: true})
    const destinationError = /^[a-zA-Z0-9\-]{2,}$/g;
    const amountError = /^[0-9]{2,}$/;
    const handleChange = (e)=>{
        const {name, value} = e.target
        setValid({...valid, [name]: true})
        setOffer({...offer, [name]: value})
        
    }
    const handleOnBlur = (e) => {
        const { value, name } = e.target;
        if (name === "destination" || name === "location")
          setValid({ ...valid, [name]: destinationError.test(value) });
        if (name === "amount")
          setValid({ ...valid, [name]: amountError.test(value) });
      };
    const handleSubmit = (e)=>{
        e.preventDefault()
        const val = Object.values(valid)
        if (val.some((item) => item === false)) return
        addOfferCall(offer, dispatch)
        setOffer({location: '', destination: '', amount: ''})
       
    }
    useEffect(()=>{
        
        
        const val = Object.values(valid)
        if (val.some((item) => item === false)) {
            setDisabled(true);
          } else {
            setDisabled(false);
          }
    }, [offer, valid])
    return (
        <div>
            <div className="add-offer-container">
                <div className="add-offer-form-container">
                    <div style={{ width: '80%'}}>
                        <h2>Add Offer</h2>
                        <form onSubmit={handleSubmit} action="">
                        <div className="add-info">
                                <h4>Location</h4>
                                <span style={{color: 'red'}}>{!valid.location ? 'invalid destination' : ''}</span>
                                <input type="text" value={offer.location} onChange={handleChange} onBlur={handleOnBlur} name="location" required/>
                            </div>
                            <div className="add-info">
                                <h4>Destination</h4>
                                <span style={{color: 'red'}}>{!valid.destination ? 'invalid destination' : ''}</span>
                                <input type="text" value={offer.destination} onChange={handleChange} onBlur={handleOnBlur} name="destination" required/>
                            </div>
                            <div className="add-info">
                                <h4>Amount</h4>
                                <span style={{color: 'red'}}>{!valid.amount ? 'invalid amount' : ''}</span>
                                <input type="number" value={offer.amount} onChange={handleChange} onBlur={handleOnBlur} name="amount" required/>
                            </div>
                            <button className="add-offer-btn" disabled={disabled}>Add Offer</button>
                        </form>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default AddOfferForm
