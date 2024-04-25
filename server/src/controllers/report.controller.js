import ReportModel from "./src/models/report.model.js"



const ReportController = { 

  getAllReports: async (req, res) => {
    try {
      const reports = await ReportModel.getAllReports();
      res.json(reports);
    } catch (error) {
      console.log(error);
    }
  },

  createReport: async (req, res) => {
    try {
      const newReport = await ReportModel.createReport(req.body);
      res.json(newReport);
    } catch (error) {
      console.log(error);
    }
 },

deleteReport : async (req, res) => {
  try {
    const id = req.params.id;
    const deleteReport = await ReportModel.deleteReport(req, res);

    res.json(deleteReport);
  } catch (error) {
    console.log(error);
  }
},
updateReport: async (req, res) => {
  try {
    const updatedReport = await ReportModel.updateReport(req, res);
    res.json(updatedReport);
  } catch (error) {
    console.log(error);
  }
},
}

export default ReportController;