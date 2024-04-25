import  Routes  from "express";
import TeamController from "../controllers/team.controller.js";

const RoutesTeam = Routes();

RoutesTeam.route('/team')

      .get(UserController.getAllTeam)
      .post(UserController.createTeam)
      .get(UserController.getTeam)
      .delete(UserController.deleteTeam)
      .put(UserController.updateTeam)

export default RoutesTeam;