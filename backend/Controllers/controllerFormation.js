const formation = require("../Models/formation");

async function AddFormation(req, res) {
  const { body } = req;
  const Newformation = await formation.create({
    ...body,
  });


  if (!Newformation) throw Error("eroor");
  else res.json(Newformation);
}

async function AllFormation(req, res) {
  const allformation = await formation.find();
  res.json(allformation);
}

async function DeletFormation(req, res){
const { id } = req.params
const delet = await formation.findOneAndDelete({_id:id})
if(!delet) throw Error('! Not deleted')
else res.json({message : 'Deleted'})
}


module.exports = {
  AddFormation,
  AllFormation,
  DeletFormation,
};
