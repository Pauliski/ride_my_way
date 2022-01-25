import React from 'react'
import { tripDetails } from '../../StaticData'

import './QuickBook.css'

const QuickBook = () => {
    return (
        <div id='quick-book'  className='quickbook-wrapper'>
            <h1 className='section-title'>Quick Book</h1>
            <div className='trip-details'>
                {tripDetails.map(trip => <div className='each-trip'>{trip.location} - {trip.destination}</div>)}
            </div>
        </div>
    )
}

export default QuickBook
