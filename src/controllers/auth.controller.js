import { profile } from "console"
import { cryptPassword, comparePassword } from "../helpers/crypt.js"
import { PrismaClient } from "@prisma/client"
import { createToken } from "../helpers/jwt.js"

const prisma = new PrismaClient()

const authController = {
    login: async(req, res) => {
       try { 
        const{ email, password }= req.body;
        const user = await prisma.users.findUnique ({where:{email}});
        if (!user) {
            return res.status(404).json({ mesage: "user not exists"})
        }
        if (user.password) {
            const match = comparePassword(password.user.password);
            if (!match){
                return res.status(404).json({ mesage: "invalid password"})
            }
        }
        const token = createToken(users.id);
       const data = {
        token: token,
        user:{
            id:users.id,
            username: users.username,
            email: users.email,
            rol: users.type_of_rol,
            profile: users.profile

        }
       }
       res.status(200).json({ message: "User logged in", data: data});
       }catch (error){
        res.status(500).json ({ message: "error logging in"})
       }
    },

    register: async (req, res) => {
        try {
            const user = await prisma.users.findUnique({ where: { email: req.body.email }})
            console.log(user)
            if (user) return res.status(400).send("user already exists")

            const { username, email, password, type_of_rol,profile } = req.body;
            const newUser = await prisma.users.create({
                data: {
                    username,
                    email,
                    password: cryptPassword(password),
                    type_of_rol: type_of_rol || false,
                    profile: profile || "client"
                }
            });

            if (newUser) {
                res.status(200).json({ message: 'User created successfully', newUser })
            }
        } catch (error) {
            console.error("Error registering:", error);
            res.status(500).json({ message: 'Error registering', error })
        }
    }
}

export default authController