import  Routes  from "express";
import ReportController from "../controllers/report.controller.js";

const RoutesReports = Routes();

RoutesReports.route('/reports')
      .get(ReportController.getAllReports)
      .post(ReportController.createReport)
      .put(ReportController.updateReport)
      .delete(ReportController.deleteReport)

export default RoutesReports;


