const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "role",
    },
  ],


  organisme_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organisme",
    },
  ],
});
module.exports = mongoose.model("User", UserSchema);
