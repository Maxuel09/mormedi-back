import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const clientModel = {

    getAllClients: async () => {
        try {
            const clients = await prisma.clients.findMany();
            return clients;
            
        }catch (error) {
            console.log(error);
        }
    },

    createClient: async (data) => {
        try {
            const newClient = await prisma.clients.create({
                data
            });
            return newClient;
        }catch (error) {
            console.log(error);
        }
    }
}

export default clientModel;
