const Emplyer = require("../Models/users");
async function AddEmplyer(req, res) {
    const { body } = req;
    if(!body.name || !body.email || !body.password ) throw Error("Inputs is not filled");
    else{
      const NewEmplyer = await Emplyer.create({
        ...body,
      });
      if (!NewEmplyer) throw Error("eroor");
      else res.json(NewEmplyer);
    }
  
  
   
  }


  module.exports = {
    AddEmplyer ,
  };