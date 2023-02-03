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
app.use('/', express.static('public'))

const AuthRouter = require("./routes/auth.router")
const DocRouter = require("./routes/doc.router")
const UserRouter = require("./routes/user.router")

app.use("/api/auth", AuthRouter);
app.use("/api/doc", DocRouter);
app.use("/api/user", UserRouter);

//serv
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})