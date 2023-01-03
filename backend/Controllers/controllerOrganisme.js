const organisme = require("../Models/organisme");

async function AddOrganisme(req, res) {
  const { body } = req;
  const Neworganise = await organisme.create({
    ...body,
  });


  if (!Neworganise) throw Error("eroor");
  else res.json(Neworganise);
}

async function AllOrganisme(req, res) {
  const Neworganise = await organisme.find();
  res.json(Neworganise);
}

async function DeletOrganisme(req, res){
const { id } = req.params
const delet = await organisme.findOneAndDelete({_id:id})
if(!delet) throw Error('! Not deleted')
else res.json({message : 'Deleted'})
}


module.exports = {
  AddOrganisme,
  AllOrganisme,
  DeletOrganisme,
};
