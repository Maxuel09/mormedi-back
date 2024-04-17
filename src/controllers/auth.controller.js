import { PrismaClient } from "@prisma/client";
import { comparePassword, cryptPassword } from "../helpers/crypt.js";
import { createToken } from "../helpers/jwt.js";

const prisma = new PrismaClient();

const authController = {
    login: async (req, res) => {
        try { 
            const { email, password } = req.body;
            const user = await prisma.users.findUnique({ where: { email } });
            if (!user) {
                return res.status(404).json({ message: "User does not exist" });
            }
            const match = comparePassword(password, user.password);
            if (!match) {
                return res.status(404).json({ message: "Invalid password" });
            }
            const token = createToken(user.id);
            const data = {
                token: token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    rol: user.type_of_rol,
                    profile: user.profile
                }
            };
            res.status(200).json({ message: "User logged in", data: data });
        } catch (error) {
            console.error("Error logging in:", error);
            res.status(500).json({ message: "Error logging in", error });
        }
    },

    register: async (req, res) => {
        try {
            const { username, email, password, type_of_rol, profile } = req.body;
            const existingUser = await prisma.users.findUnique({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }
            const newUser = await prisma.users.create({
                data: {
                    username,
                    email,
                    password: cryptPassword(password),
                    type_of_rol: type_of_rol || false,
                    profile: profile || "client"
                }
            });
            res.status(200).json({ message: "User created successfully", newUser });
        } catch (error) {
            console.error("Error registering:", error);
            res.status(500).json({ message: "Error registering", error });
        }
    }
};

export default authController;
