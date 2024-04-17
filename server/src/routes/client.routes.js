import  Routes  from "express";
import clientController from "../controllers/client.controller.js";

const routesClient = Routes();

routesClient.route('/clients').get(clientController.getAllClients)
routesClient.route('/clients').post(clientController.createClients)
routesClient.route('/clients').get(clientController.getClients)
routesClient.route('/clients/:id').delete(clientController.deleteClient)
routesClient.route('/clients').put(clientController.updateClients)



export default routesClient;