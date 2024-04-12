import express from 'express';
import cors from 'cors';
import routesAuth from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/auth", routesAuth)

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`🔉Server is running on port ${port}`);
})

export default app