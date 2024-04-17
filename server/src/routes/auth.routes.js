import  Routes  from "express";
import authController from "../controllers/auth.controller.js";

const routesAuth = Routes();

routesAuth.route('/login').post(authController.login)
routesAuth.route('/register').post(authController.register)


export default routesAuth;