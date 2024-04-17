import  Routes  from "express";
import UserController from "../controllers/user.controller.js";

const RoutesUser = Routes();

RoutesUser.route('/offerts').get(UserController.getAllUsers)
RoutesUser.route('/offerts').post(UserController.createUsers)
RoutesUser.route('/offerts').get(UserController.getUsers)
RoutesUser.route('/offerts/:id').delete(UserController.deleteUser)
RoutesUser.route('/offerts').put(UserController.updateUsers)



export default RoutesUser;