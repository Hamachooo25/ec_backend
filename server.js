const express = require("express");
const app = express();
const mongoose = require("mongoose");
/*
const session = require("express-session");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
*/

require("dotenv").config();

const db = process.env.DB;

/*
app.use(session( {
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));*/


//DB
mongoose.connect(db).then(() => console.log('MongoDB connected!')).catch((err) => console.log(err));

const PORT = process.env.PORT || 3001;


//middleware
app.use(express.json());
/*
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
*/



app.get("/", (req, res)=>{
  res.send("home")
});

app.listen(PORT, ()=> console.log(`success on port ${PORT}`));