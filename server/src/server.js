import express from 'express';
import RoutesAuth from './routes/auth.routes.js';
import RoutesClient from './routes/client.routes.js';
import RoutesOffert from './routes/client.offert.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3200;

app.use(express.json())
app.use("/auth", RoutesAuth)
app.use("/client", RoutesClient)
app.use("/offert", RoutesOffert)

app.listen(port, () => {
    console.log(`🔉Server is running on port ${port}`);
})

export default app