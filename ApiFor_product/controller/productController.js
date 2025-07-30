const modal = require("../model/productSchema");

const addProduct = async (req, res) => {
  const { name, category, title, price, ratingPeople } = req.body;
  let image = "";
  try {
    if (req.file) {
      image = req.file.path;
    }
    let obj = {
      name,
      category,
      title,
      price,
      ratingPeople,
      image,
    };

    await modal.create(obj);
    res.status(201).json({
      massage: "data Added successfully !! ",
      status: "success",
      data: obj,
    });
  } catch (error) {
    res.status(400).json({
      massage: "Something went wrong !!",
      status: "faild!",
      error: error,
    });
  }
};
const home = (req, res) => {
  res.status(200).json({ massage: "API is runnig " });
};

module.exports = {
  addProduct,
  home,
};
