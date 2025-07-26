const express = require("express");
const dotenv = require("dotenv");
const app = express();
const database = require("./config/database");
const cors = require("cors");

dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/allRouter"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
