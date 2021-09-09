import Express from 'express';
import driverRoute from './Route/driver.js';
import passengerRoute from './Route/passenger.js'
import cors from 'cors';



const app = Express();

 app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({extended: true}))

app.use('/api/driver', driverRoute)
app.use('/api/passenger', passengerRoute)

app.listen(5000, ()=> console.log('Server is running'))