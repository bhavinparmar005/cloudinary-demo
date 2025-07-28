const modal = require("../model/productSchema");

const addProduct = (req, res) => {
  console.log(req.body);
  let image = "";
  if (req.file) {
    image = req.file;
  }
  console.log(image);
  res.status(201).json({ massage: "data Added successfully !! " });
};
const home = (req, res) => {
  res.status(200).json({ massage: "API is runnig " });
};

module.exports = {
  addProduct,
  home,
};
