//Express 
const express = require('express');
const app = express();
//port
const port = 3001;

//modules
const cors = require("cors");

//Db
const sequelize = require('./data/db');

app.use(express.json());
app.use(cors());

const AuthRouter = require("./routes/auth.router")

app.use("/api/auth", AuthRouter);

//serv
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})