const Organisme = require("../Models/organisme");
const Employer = require("../Models/users");
const Formation = require("../Models/formation");
require("dotenv").config();
const EMPLOYER_id = process.env.EMPLOYER_ID;

const TotalOrganisme = async (req, res) => {
  try {
    Organisme.countDocuments({}, function (err, docCount) {
      if (err) {
        res.this.state(502).json(err);
      }
      res.json(docCount);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const TotalEmployer = async (req, res) => {
  try {
    Employer.countDocuments({ role_id: EMPLOYER_id }, function (err, docCount) {
      if (err) {
        res.status(502).json(err);
      }
      res.json(docCount);
    });
  } catch (error) {
    throw Error(error);
  }
};

const TotalFormation = async (req, res) => {
  try {
    Formation.countDocuments({}, function (err, docCount) {
      if (err) {
        res.status(502).json(err);
      }
      res.json(docCount);
    });
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  TotalOrganisme,
  TotalEmployer,
  TotalFormation
};
