 
import ClientModel from "./src/models/client.model.js"



// const clientController = {
//     getAllClients: async (req, res) => {
//       try {
//         const clients = await ClientsModel.getAllClients();
//         res.json(trips);
//       } catch (error) {
//         console.log(error);
//       }
//     },
  
//     getClient: async (req, res) => {
//       try {
//         const id = req.params.id;
  
//         // Check if id is valid
//         if (!id) {
//           res.status(400).json({ message: "Invalid ID provided" });
//           return;
//         }
  
//         const client = await ClientModel.getClient(req, res);
  
//         // Check if Client is found
//         if (!Array.isArray(Client) || Client.length === 0) {
//           res.status(404).json({ message: `Client with id ${id} not found` });
//           return;
//         }
  
//         // Return Client if found
//         res.json(Client);
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal Server Error" });
//       }
//     },
//     getClientBySeller: async (req: Request, res: Response) => {
//       try {
//         const user_id = req.params.id;
  
//         // Check if id is valid
//         if (!user_id) {
//           res.status(400).json({ message: "Invalid ID provided" });
//           return;
//         }
  
//         const Client = await ClientModel.getClientBySeller(req, res);
  
//         // Check if Client is found
//         if (!Array.isArray(Client) || Client.length === 0) {
//           res
//             .status(404)
//             .json({ message: `Clients with user id ${user_id} not found` });
//           return;
//         }
  
//         // Return Client if found
//         res.json(Client);
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal Server Error" });
//       }
//     },
  
//     addClient: async (req: Request, res: Response) => {
//       const {
//         Client_name,
//         Client_description,
//         places,
//         price,
//         category,
//         img,
//         date_Client,
//       } = req.body;
//       console.log(req.body);
//       if (
//         !Client_name ||
//         !Client_description ||
//         !price ||
//         !places ||
//         !category ||
//         !img ||
//         !date_Client
//       ) {
//         return res
//           .status(400)
//           .json({ message: "Please provide all Client details" });
//       }
  
//       await ClientModel.createClient(req, res);
//     },
//     updateClient: async (req: Request, res: Response) => {
//       const id = req.params.id;
//       const {
//         Client_name,
//         Client_description,
//         places,
//         price,
//         category,
//         img,
//         date_Client,
//       } = req.body;
//       if (
//         !Client_name ||
//         !Client_description ||
//         !price ||
//         !places ||
//         !category ||
//         !img ||
//         !date_Client
//       ) {
//         res.status(400).json({ message: "Please provide all Client details" });
//         return;
//       }
//       await ClientModel.updateClient(req, res);


      deleteClient = async (req, res) => {
        try {
          const id = req.params.id;
          const deleteClient = await ClientModel.deleteClient(req, res);
    
          res.json(deleteClient);
        } catch (error) {
          console.log(error);
        }
      }
    ,
    createClient = async (req, res) => {
            const {
                name,
                lastname,
                qualification,
                department,
                company,
                telephone,
                address,
                postal_code,
                city,
                comments

            } = req.body;
            console.log(req.body);
            if (
                !name || 
                !lastname ||
                !qualification||
                !department||
                !company||
                !telephone||
                !address||
                !postal_code||
                !city||
                !comments
            ) {
                return res 
                .status(400)
                .json({mesaje: "pleace provide all trip details"})
            }
        await ClientModel.createClient(req, res);
    }
    
    // export const delateClient = async (id) => {
    //     try {
    //       await prisma.clients.delete({
    //         where: {
    //           id_cliente: id
    //         }
    //       });
    //     } catch (error) {
    //       throw {
    //         status: 500,
    //         message: `Error al eliminar cliente con ID ${id}`
    //       };
    //     }
    //   };
//   };
  
  export default ClientController;
