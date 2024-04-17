import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// // Agregar un nuevo cliente
// export const agregarCliente = async ({
//   name,
//   lastname,
//   qualification,
//   departamento,
//   company,
//   telephone,
//   address,
//   postal_codigo,
//   city,
//   comments
// }) => {
//   try {
//     const client = await prisma.clients.create({
//       data: {
//         name,
//         lastname,
//         qualification,
//         departamento,
//         company,
//         telephone,
//         address,
//         postal_codigo,
//         city,
//         comments,
//         created_at: new Date()
//       }
//     });
//     return client;
//   } catch (error) {
//     throw { status: 500, message: "Error al crear el cliente" };
//   }
// };

// // Obtener todos los clientes
// export const listarClientes = async () => {
//   try {
//     const clientes = await prisma.clients.findMany();
//     return clientes;
//   } catch (error) {
//     throw { status: 500, message: "Error al obtener lista de clientes" };
//   }
// };

// // Actualizar cliente por ID
// export const actualizarCliente = async (id, {
//   name,
//   lastname,
//   qualification,
//   departamento,
//   company,
//   telephone,
//   address,
//   postal_codigo,
//   city,
//   comments
// }) => {
//   try {
//     const client = await prisma.clients.update({
//       where: {
//         id_cliente: id
//       },
//       data: {
//         name,
//         lastname,
//         qualification,
//         departamento,
//         company,
//         telephone,
//         address,
//         postal_codigo,
//         city,
//         comments
//       }
//     });
//     return client;
//   } catch (error) {
//     throw { status: 500, message: `Error al actualizar cliente con ID ${id}` };
//   }
// };

// Eliminar cliente por ID

const ClientModel = {
  deleteClient: async (req, res) => {
    const result = await prisma.client.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;

},

createClient: async (req, res) => {
  const result = await prisma.clients.create ({
    data: req.body,

  });
  res.json(result)
}

}

export default ClientModel;


// // Prueba de las funciones
// const main = async () => {
//   try {
//     const name = "Juan";
//     const lastname = "Pérez";
//     const qualification = "Ingeniero";
//     const departamento = "Sistemas";
//     const company = "Ingeniería S.A.";
//     const telephone = "12345678";
//     const address = "Calle Falsa 123";
//     const postal_codigo = "12345";
//     const city = "Ciudad Falso";
//     const comments = "Ninguno";

//     const cliente1 = await agregarCliente({
//       name,
//       lastname,
//       qualification,
//       departamento,
//       company,
//       telephone,
//       address,
//       postal_codigo,
//       city,
//       comments
//     });
//     console.log("Cliente agregado correctamente:", cliente1);

//     const clientes = await listarClientes();
//     console.log("Lista de clientes:", clientes);

//     const clienteId = 1;
//     const updatedData = {
//       name: "Pedro",
//       lastname: "Gómez",
//       qualification: "Arquitecto",
//       departamento: "Diseño",
//       company: "Arquitectura y Diseño S.A.",
//       telephone: "87654321",
//       address: "Avenida Principal 456",
//       postal_codigo: "54321",
//       city: "Ciudad Arquitectura",
//       comments: "Actualización de datos"
//     };

//     const clienteActualizado = await actualizarCliente(clienteId, updatedData);
//     console.log(`Cliente con ID ${clienteId} actualizado correctamente:`, clienteActualizado);

//     await eliminarCliente(clienteId);
//     console.log(`Cliente con ID ${clienteId} eliminado correctamente`);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// main();