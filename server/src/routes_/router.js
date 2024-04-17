import express from 'express';
import { PrismaClient } from '@prisma/client';
import { agregarCliente, eliminarCliente, actualizarCliente } from './crud.js';

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.render("pages/clientes", { clientes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Registrar un nuevo cliente
router.post("/cliente", async (req, res) => {
  const { name, lastname, qualification, departamento, company, telephone, address, postal_codigo, city, comments } = req.body;

  try {
    await agregarCliente(prisma, { name, lastname, qualification, departamento, company, telephone, address, postal_codigo, city, comments });
    res.redirect("/");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Ruta para actualizar cliente por ID
router.post("/actualizar-cliente/:id", async (req, res) => {
  const { name, lastname, qualification, departamento, company, telephone, address, postal_codigo, city, comments } = req.body;
  const id = req.params.id;

  try {
    await actualizarCliente(prisma, id, { name, lastname, qualification, departamento, company, telephone, address, postal_codigo, city, comments });
    res.redirect("/Crud");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Ruta para borrar cliente por ID
router.post("/borrar-cliente/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await eliminarCliente(prisma, id);
    res.redirect("/Crud");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

export default router;