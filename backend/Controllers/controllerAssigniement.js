const jwt = require("jsonwebtoken");
const assigniement = require("../Models/assignment");
const formation = require("../Models/formation");
const employer = require("../Models/users");
require("dotenv").config();

async function AddAssigniement(req, res) {
  const { body } = req;
  const Existe_Formation = await formation.findById(body.formation);
  const Existe_Employer = await employer.findById(body.employer);
  const NewAssiniement = await assigniement.create({
    formation_id: Existe_Formation._id,
    employer_id: Existe_Employer._id,
  });
  try {
    if (NewAssiniement) res.json("Add succes");
  } catch {
    throw Error("error");
  }
}

async function AllAssigniement(req, res) {
  const { body } = req;
  const afficherAllAssigniement = await assigniement
    .find()
    .populate("formation_id")
    .populate("employer_id");
  const find_employee = await employer.find();
  const find_formation = await formation.find();
  res.json({
    afficherAllAssigniement,
    employee: find_employee,
    formation: find_formation,
  });
}

async function MonAssigniment(req, res) {
  const token = req.params.token;
  const Verification_token = await jwt.verify(token, process.env.SECRET_TOCKEN);
  const employer_Existe = await employer.findById(Verification_token._id);
  if (!employer_Existe) res.send({ error: "Error, Employer is not existed" });
  const maFormation = await assigniement.find({
    employer_id: employer_Existe._id,
  }).populate('employer_id').populate('formation_id')
  res.send(maFormation);
}

module.exports = {
  AddAssigniement,
  AllAssigniement,
  MonAssigniment,
};
