import React from 'react'

export const localGovernment =  [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti-Osa",
    "Ibeju-Lekki",
    "Ifako-Ijaiye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos-Island",
    "Lagos-Mainland",
    "Mushin",
    "Ojo",
    "Oshodi",
    "Isolo",
    "Shomolu",
    "Surulere",
    "Yewa-South",
    'Oshodi/Bolade', 'Orile',  'Ajao-Estate', 'Mafoluku', 'Sogunle', 'Sogunle/Alasia', 'Okota', 'Ishagatedo', 'Oke-Afa/Ejigbo'
]
export const Datalist = (props)=>{
return(
    <datalist id={props.id} name='lg'>
        {localGovernment.map(lg => <option value={lg} key={lg}></option>)}
    </datalist>
)
}
