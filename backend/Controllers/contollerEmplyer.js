const Emplyer = require("../Models/users");
const Role = require("../Models/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const storage = require("local-storage");

async function AddEmplyer(req, res) {
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

async function LoginUser(req, res) {
  const { body } = req;
  if (!body.email || !body.password) throw Error("Inputs is not filled");
  else {
    const existeUser = await Emplyer.findOne({ email: body.email });
    if (
      !existeUser ||
      !(await bcrypt.compare(body.password, existeUser.password))
    )
      throw Error("Email or Password inccorect");
    const createToken = await jwt.sign(
      { _id: existeUser._id },
      process.env.SECRET_TOCKEN
    );
    storage("token", createToken);
    const role = await Role.findById(existeUser.role_id);
    res.json({
      role_id: role.name,
      token: storage("token"),
      name: existeUser.name,
    });
  }
}

async function DaletEmplyer(req, res) {
  const { id } = req.params;
  console.log(id)
  try { 
    const DeletEmployer = await Emplyer.findByIdAndDelete({ _id:id });
    if (DeletEmployer) res.json({ message: "Emplyer Deleted" });
  } catch {
    res.json({ message: "not deleted" });
  }
}

async function AllEmployer(req,res){
  const {body} = req 
  const allEmployer = await Emplyer.find()
  try{
    if(allEmployer) res.json(allEmployer)
  } catch {
    throw new Error(error);
  }

}

module.exports = {
  AddEmplyer,
  LoginUser,
  DaletEmplyer,
  AllEmployer
};
