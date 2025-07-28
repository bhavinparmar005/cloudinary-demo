// const cloudinary = require("cloudinary");
// const dotenv = require("dotenv");
// dotenv.config();
// const { cloudinaryStorage } = require("multer-storage-cloudinary");

// cloudinary.config({
//   cloud_name: process.env.cloud_name,
//   api_key: process.env.api_key,
//   api_secret: process.env.api_secret, // Click 'View API Keys' above to copy your API secret
// });

// const storage = new cloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "cloudinaryDemo",
//     allowedFormate: ["jpeg", "png", "jpg"],
//   },
// });

// module.exports = { storage };

const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "cloudinaryDemo",
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

module.exports = { storage };
