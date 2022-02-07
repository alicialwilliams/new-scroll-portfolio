require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = require('./routes/contactRoute')

const app = express();
//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listening to port 5000`))