import ClientModel from "../model/client.model.js";

const ClientController = {

    getAllClients: async (req, res) => {
        try {
            const clients = await ClientModel.getAllClients();
            res.json(clients);
            
        }catch(error) {
            console.log(error);
        }
    },

    createClient: async (req, res) => {
        try {
            const newClient = await ClientModel.createClient(req.body);
            res.json(newClient);
            
        }catch(error) {
            console.log(error);
        }
    },

    updateClient: async (req, res) => {
        try {
            const updatedClient = await ClientModel.updateClient(req.params.id, req.body);
            res.json(updatedClient);
            
        }catch(error) {
            console.log(error);
        }
    },

    deleteClient: async (req, res) => {
        try {
            const deletedClient = await ClientModel.deleteClient(req.params.id);
            res.json(deletedClient);
            
        }catch(error) {
            console.log(error);
        }
    }
}

export default ClientController