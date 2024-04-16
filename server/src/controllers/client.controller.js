import clientModel from "../model/client.model.js";

const clientController = {

    getAllClients: async (req, res) => {
        try {
            const clients = await clientModel.getAllClients();
            res.json(clients);
            
        }catch(error) {
            console.log(error);
        }
    },

    createClient: async (req, res) => {
        try {
            const newClient = await clientModel.createClient(req.body);
            res.json(newClient);
            
        }catch(error) {
            console.log(error);
        }
    }
}

export default clientController