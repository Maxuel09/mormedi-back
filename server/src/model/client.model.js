import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ClientModel = {

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
    },

    updateClient: async (id, data) => {
        try {
            const updatedClient = await prisma.clients.update({
                where: {
                    id
                },
                data
            });
            return updatedClient;
        }catch (error) {
            console.log(error);
        }
    },

    deleteClient: async (id) => {
        try {
            const deletedClient = await prisma.clients.delete({
                where: {
                    id
                }
            });
            return deletedClient;
        }catch (error) {
            console.log(error);
        }
    }
}

export default ClientModel;
