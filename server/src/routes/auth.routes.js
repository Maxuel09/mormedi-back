import  Routes  from "express";
import AuthController from "../controllers/auth.controller.js";

const RoutesAuth = Routes();

RoutesAuth.route('/login').post(AuthController.login)
RoutesAuth.route('/register').post(AuthController.register)


export default RoutesAuth;