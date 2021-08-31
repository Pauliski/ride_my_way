import {Router} from 'express';
// import {pool} from '../db.js'

const router = Router()

router.post('/signup',async (req, res)=>{
   try {
       const {username, email, mobile_number, password} = req.body;
       const newDriver = await pool.query(
           "INSERT INTO driver()"
       )
   } catch (err) {
       console.error(err.message)
   }
});

router.post('/login', (req, res)=>{
    res.send('LOg In')
})

export default router;