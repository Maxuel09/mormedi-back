import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const ReportModel = {

  
  getAllReports: async () => {
    try {
      const reports = await prisma.reports.findMany();
      res.json(reports);
    } catch (error) {
      console.log(error);
    }
},
 
createreport: async (data) => {
  try {
    const newOffer = await prisma.reports.create({
      data
    });
    // res.json(newOffer);
    return newReport
  } catch (error) {
    console.log(error);
  }
},


updateReport: async (req, res) => {
  try {
    const updatedReport = await prisma.reports.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.json(updatedReport);
  } catch (error) {
    console.log(error);
  }
},

deleteReport: async (req, res) => {
  try {
    const deletedReport = await prisma.reports.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedReport);
  } catch (error) {
    console.log(error);
  }
},

}

export default ReportModel;