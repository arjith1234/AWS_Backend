const express = require('express');
const { default: mongoose } = require('mongoose');
const recipeSchema = require("../model/recipeSchema")
const recipeRoute = express.Router();


recipeRoute.post("/upload-recipe", (req, res) => {
    recipeSchema.create(req.body, (err, data) => {
        if (err) {
            return err;
        } else {
            res.json(data);
        }
    });
});


recipeRoute.get("/", (req, res) => {
    recipeSchema.find((err, data) => {
        if (err) {
            return err;
        } else {
            res.json(data);
        }
    });
});


recipeRoute.delete("/delete-recipe/:id", (req, res) => {
    recipeSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) {
            return err;
        } else {
            res.json(data);
        }
    });
});


recipeRoute.get("/get-recipe/:id", (req, res) => {
    recipeSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) {
            return err;
        } else {
            res.json(data);
        }
    });
});


recipeRoute.put("/rate-comment/:id", (req, res) => {
    recipeSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), { $set: req.body },
        (err, data) => {
            if (err) {
                return err;
            } else {
                res.json(data);
            }
        });
});

module.exports = recipeRoute;
