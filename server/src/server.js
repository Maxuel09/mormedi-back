import express from 'express';
import RoutesAuth from './routes/auth.routes.js';
import RoutesClient from './routes/client.routes.js';
import RoutesOffert from './routes/offert.routes.js';
import RoutesUser from './routes/user.routes.js';
import RoutesTeam from './routes/team.routes.js';
import RoutesSuper_Admin from './routes/super_admin.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3200;

app.use(express.json())
app.use("/auth", RoutesAuth)
app.use("/client", RoutesClient)
app.use("/offert", RoutesOffert)
app.use("/user", RoutesUser)
app.use("/team", RoutesTeam)
app.use("/super_admin", RoutesSuper_Admin)

app.listen(port, () => {
    console.log(`🔉Server is running on port ${port}`);
})

export default app