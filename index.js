import express from "express";
import dotenv from "dotenv";
import salaryRoute from "./routes/salaryRoute.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import client from "./models/database.js";

const app = express();
dotenv.config();


// app.get("/", (req, res) => {
//   res.send('hello world')
// })

//middleware
app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use("/", salaryRoute);
app.use("/auth", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({ success: false, status:errorStatus, message: errorMessage, stack: err.stack,})
})

app.listen(8800, ()=> {
  console.log ("Server Running On Port 8800")
})

client.connect( err => {
  if(err){
    console.log(err.message)
  } else {
    console.log('Connected to BE')
  }
}

)