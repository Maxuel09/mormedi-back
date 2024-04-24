import { Router } from "express";
import ClientController from "../controllers/client.controller.js";

const RoutesClients = Router();

RoutesClients.route("/clients")
    .get(ClientController.getAllClients)
    .post(ClientController.createClient)
    .put(ClientController.updateClient)
    .delete(ClientController.deleteClient)
    
export default RoutesClients