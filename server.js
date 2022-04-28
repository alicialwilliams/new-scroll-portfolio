require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = require('./route/contactRoute')

const app = express();
//middleware
app.use(express.json());
app.use(cors("/", contactRoute));

const port = process.env.PORT || 6000;
app.listen(port, console.log(`Server listening to PORT ${port}.`));