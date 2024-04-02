import express from 'express';
import routesAuth from './routes/auth.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use("/auth", routesAuth)

app.listen(port, () => {
    console.log(`🔉Server is running on port ${port}`);
})

export default app