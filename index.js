const mongoose = require('mongoose')
const express =require("express")
const app = express();
const studentRoute = require("./controller/studentRoute")
const bodyParser =require("body-parser")
const cors =require("cors")

mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://challadeepika2004:Deepika2004@cluster0.lakefw4.mongodb.net/schooldb")
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error Occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use("/studentRoute",studentRoute)
app.listen(4000, () =>{
    console.log("Server Started at 4000")
})