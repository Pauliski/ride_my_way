import {Router} from 'express'
import {pool} from '../db.js';
import {validatePassengerSignup} from '../validate.js'
// const pool = require('../db')




const router = Router()

router.post('/signup', async(req, res)=>{
   try {
    const result = validatePassengerSignup(req.body)
     console.log(result.error.details)
    // let error = {}
const error = {}
    result.error.details.map(item =>{
        const {label} = item.context
        let key = label
        error[key] = item.message
        
        // error.set(label, item.message)
        // console.log(item.context.label, item.message)
        
    })
    console.log(error)
    const {username, email, mobile, password} = req.body;
    const newPassenger = await pool.query(
        "INSERT INTO passenger (username, email, mobile_number, password) VALUES($1, $2, $3, $4) RETURNING *", 
        [username, email, mobile, password]
    );
    res.json(newPassenger.rows[0])
   } catch (err) {
       console.error(err.message)
   }
});

router.post('/login', (req, res)=>{
    res.send('Welcome')
})

export default router;