const formation = require("../Models/formation");

async function AddFormation(req, res) {
  const { body } = req;
  const Newformation = await formation.create({
    ...body,
  });
  try{
    if (Newformation) res.json(Newformation);
  }
  catch {
    throw Error("eroor");
  }
}

async function AllFormation(req, res) {
  const allformation = await formation.find();
  res.json(allformation);
}

async function DeletFormation(req, res){
const { id } = req.params
const delet = await formation.findOneAndDelete({_id:id})
try{
  if(delet) res.json({message : 'Deleted'}) }
  
 catch{
  throw Error('! Not deleted')
}

}


module.exports = {
  AddFormation,
  AllFormation,
  DeletFormation,
};
