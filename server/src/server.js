import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import RoutesAuth from './routes/auth.routes.js';
import RoutesClients from './routes/client.routes.js';
import RoutesOffers from './routes/offer.routes.js';



const app = express();
const port = process.env.PORT ?? 4110;

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use("/auth", RoutesAuth)
app.use("/mormedi", RoutesClients)
app.use("/mormedi", RoutesOffers)




app.get('/', (req, res) => {
    res.send('Hello World!');
})



app.listen(port, () => {
    console.log(`🔉Server is running on port ${port}`);
})

export default app