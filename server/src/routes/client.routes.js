import { Router } from "express";
import clientController from "../controllers/client.controller.js";

const routesClients = Router();

routesClients.route("/clients")
    .get(clientController.getAllClients)
    .post(clientController.createClient)
    
export default routesClients