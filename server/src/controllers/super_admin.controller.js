import Super_AdminModel from "./src/models/super_admin.model.js"

const Super_AdminController  = {

getAllSuper_Admins: async (req, res) => { 
  try {
    const super_Admins = await Super_AdminModel.getAllSuper_Admins();
    res.json(super_Admins);
  } catch (error) {
    console.log(error);
  }     
} 
,
getSuper_Admin: async (req, res) => {
  try {
    const super_Admin = await Super_AdminModel.getSuper_Admin(req.params.id);
    res.json(super_Admin);
  } catch (error) {
    console.log(error);
  }
},


deleteSuper_Admin: async (req, res) => {
  try {
    const id = req.params.id;
    const deleteSuper_Admin = await Super_AdminModel.deleteSuper_Admin(req, res);

    res.json(deleteSuper_Admin);
  } catch (error) {
    console.log(error);
  }
}
,
updateSuper_Admin: async (req, res) => {
  try {
    const updatedSuper_Admin = await Super_AdminModel.updateSuper_Admin(req, res);
    res.json(updatedSuper_Admin);
  } catch (error) {
    console.log(error);
  }
},
createSuper_Admin: async (req, res) => {
      const {
        pseudonym
          
          

      } = req.body;
      console.log(req.body);
      if (
        pseudonym
          
      ) {
          return res 
          .status(400)
          .json({mesaje: "pleace provide all trip details"})
      }
  await Super_Admin.createSuper_Admin(req, res);
}
}

export default Super_AdminController;