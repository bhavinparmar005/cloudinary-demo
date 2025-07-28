import axios from "axios";
import React, { useState } from "react";


const App = () => {
  const [formData, setFormData] = useState({
    brandName: "",
    category: "",
    title: "",
    price: "",
    ratingPeople: "",
    image: "",
  });

  const handleChange = (e) => {

    let { name, value } = e.target;
    if (e.target.files) {
      setFormData({ ...formData, image: e.target.files[0] })

    } else {

      setFormData({ ...formData, [name]: value })
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3632/addProduct", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    console.log(formData)
    alert("Form submitted with image!");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Add Product (Manual Fields)</h2>
      <form
        onSubmit={handleSubmit}
        className="row g-3 border border-dark p-4 rounded"
        encType="multipart/form-data"
      >
        <div className="col-md-6">
          <label className="form-label">Brand Name</label>
          <select
            className="form-select"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            required
          >
            <option value="">Select Brand</option>
            <option value="LEVIS">LEVIS</option>
            <option value="IKON FASHION">IKON FASHION</option>
            <option value="QUELEA">QUELEA</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Rating</label>
          <select
            className="form-select"
            name="ratingPeople"
            value={formData.ratingPeople}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐⭐</option>
            <option value="3">3 ⭐⭐⭐</option>
            <option value="4">4 ⭐⭐⭐⭐</option>
            <option value="5">5 ⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
