import React, {useState} from 'react';
import {BsSearch, BsTypeH1} from 'react-icons/bs'
import { Input } from '../../element/Input';
import './Search.css'


function Search() {
    const icon = <BsSearch className='search-icon'/>
    const [trip, setTrip]= useState({location:'', destination: ''})

    return (
        <div>
            <div className="offer-search">
                <Input className="offer-search-input"/>
                <Input className="offer-search-input"/>
            </div>
            
        </div>
    )
}

export default Search

