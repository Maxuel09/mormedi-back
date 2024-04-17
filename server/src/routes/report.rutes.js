import  Routes  from "express";
import ReportController from "../controllers/report.controller.js";

const RoutesReport = Routes();

RoutesReport.route('/offerts').get(ReportController.getAllReports)
RoutesReport.route('/offerts').post(ReportController.createReports)
RoutesReport.route('/offerts').get(ReportController.getReportrs)
RoutesReport.route('/offerts/:id').delete(ReportController.deleteReport)
RoutesReport.route('/offerts').put(ReportController.updateReports)



export default RoutesReport;