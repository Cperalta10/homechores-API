require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const familyRoute = require("./routes/FamilyRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", familyRoute);

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(
        app.listen(9000, () => {
            console.log(`Listening in port ${9000}...`);
        })
    );
