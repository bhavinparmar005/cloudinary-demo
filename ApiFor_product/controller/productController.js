const modal = require("../model/productSchema");

const addProduct = (req, res) => {

    console.log(req.body)

    res.end()
};

const home = (req, res) => {
  res.json("sever Satar >>>>>>");
};

module.exports = {
  addProduct,
  home,
};
 