const organisme = require("../Models/organisme");

async function AddOrganisme(req, res) {
  const { body } = req;
  const Neworganise = await organisme.create({
    ...body,
  });
  try {
    if (Neworganise) res.json(Neworganise);
  } catch {
    throw Error("eroor");
  }
}

async function AllOrganisme(req, res) {
  const Neworganise = await organisme.find();
  try {
    if(Neworganise) res.json(Neworganise);
  }
  catch {
    throw new Error(error);
  }
}

async function DeletOrganisme(req, res) {
  const { id } = req.params;
  const delet = await organisme.findOneAndDelete({ _id: id });
  try {
    if (delet) res.json({ message: "Deleted" });
  } catch {
    throw Error("! Not deleted");
  }
}

module.exports = {
  AddOrganisme,
  AllOrganisme,
  DeletOrganisme,
};
