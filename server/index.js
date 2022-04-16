require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const cors = require("cors");
const { json } = require("express/lib/response");


const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json()); 
app.use("/api", router);

app.get("/doc",(req,res)=>{
    res.sendFile(__dirname +  "/doc.html")
})


const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
