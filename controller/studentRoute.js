const express =require('express');
const studentSchema = require('../model/studentSchema');
const { default: mongoose } = require('mongoose');
const studentRoute = express.Router();

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data)
        }
    })
})
studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })

})

// studentRoute.delete()
studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data)
        }
    })
})

/*Instead of giving it in two rows we can do it in single line
studentRoute.get("/update-student/:id")
studentRoute.put("/update-student/:id")

*/

studentRoute.route("/update-student/:id").get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })

}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set:req.body},
    (err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })

})




module.exports = studentRoute;