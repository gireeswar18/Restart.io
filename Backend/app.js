const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 3000;

app.use(cors());

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log("Error", err));

const companySchema = new mongoose.Schema({
  id: String,
  company: String,
  logo: String,
  site: String,
});

const collections = {
  maang: mongoose.model("Maang", companySchema, "maang"),
  fortune: mongoose.model("Fortune", companySchema, "fortune"),
  witch: mongoose.model("Witch", companySchema, "witch"),
};


app.get("/:collectionName", async (req, res) => {
  try {
    const { collectionName } = req.params;

    const companies = await collections[collectionName].find();

    // console.log(companies);

    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data, " + err });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
