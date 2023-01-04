const Emplyer = require("../Models/users");
const Role = require("../Models/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function AddEmplyer(req ,res) {
  const { body } = req;
  if (!body.name || !body.email || !body.password)
    throw Error("Inputs is not filled");
  else {
    const ifEmailExist = await Emplyer.findOne({ email: body.email });
    if (ifEmailExist) throw Error("emplyer existe déja");
    else {
      const hashPassword = await bcrypt.hash(body.password, 10);
      const emplyerRole = await Role.findOne({ name: "Admin" });
      const createEmplyer = await Emplyer.create({
        ...body,
        password: hashPassword,
        role_id: emplyerRole.id,
      });
      if (!createEmplyer) throw Error("Error");
      else res.json({ message: "Emplyer added" });
    }
  }
}

async function LoginUser(req ,res) {
const {body} = req
if(!body.email || !body.password) throw Error('Inputs is not filled')
else {
  const existeUser = Emplyer.findOne({email:body.email})
  if(!existeUser || (await bcrypt.compare(body.password , existeUser.password ))) throw Error('Email or Password inccorect')
  else{
    const createToken = await jwt.sign({
      
    })
  }
}

}

module.exports = {
  AddEmplyer,
};
