import  Routes  from "express";
import TeamController from "../controllers/team.controller.js";

const RoutesTeam = Routes();

RoutesTeam.route('/equipment').get(TeamController.getAllEquipment)
RoutesTeam.route('/equipment').post(TeamController.createEquipment)
RoutesTeam.route('/equipment').get(TeamController.getEquipment)
RoutesTeam.route('/equipment/:id').delete(TeamController.deleteTeam)
RoutesTeam.route('/equipment').put(TeamController.updateEquipment)



export default RoutesTeam;