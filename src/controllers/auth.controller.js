import { cryptPassword, comparePassword } from "../helpers/crypt.js"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const authController = {
    login: (req, res) => {
        res.send("login")
    },

    register: async (req, res) => {
        try {
            const user = await prisma.users.findUnique({ where: { email: req.body.email }})
            console.log(user)
            if (user) return res.status(400).send("user already exists")

            const { username, email, password, type_of_rol } = req.body;
            const newUser = await prisma.users.create({
                data: {
                    username,
                    email,
                    password: cryptPassword(password),
                    type_of_rol: type_of_rol || false
                }
            });
        } catch (error) {
            console.error("Error registering:", error);
            res.status(500).json({ message: 'Error registering', error })
        }
    }
}

export default authController