import  Routes  from "express";
import ClientController from "../controllers/client.controller.js";

const RoutesClient = Routes();

RoutesClient.route('/clients').get(ClientController.getAllClients)
RoutesClient.route('/clients').post(ClientController.createClients)
RoutesClient.route('/clients').get(ClientController.getClients)
RoutesClient.route('/clients/:id').delete(ClientController.deleteClient)
RoutesClient.route('/clients').put(ClientController.updateClients)



export default RoutesClient;