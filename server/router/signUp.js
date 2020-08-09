const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

router.post('/',(req,res,next) =>{
    console.log(req.body);
    User.find({email : req.body.email})
    .exec()
    .then(user => {
        if(user.length >= 1){
            res.status(409).json({
                message : 'Email already exists'
            })
        }
        else{
            const user = new User({
                _id : new mongoose.Types.ObjectId,
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                password : req.body.password,
                city:req.body.city,
                middlename:req.body.middlename,
                phone:req.body.phone,
                year:req.body.year,
                hobby:req.body.hobby
            })
            user
            .save()
            .then(result =>{
                console.log(result);
                res.status(201).json({
                    message:"Successfull SignUp"
                })
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            });
        }
    })
    .catch(err =>{
        console.log(err);
        res.status(422).json({
            error:err
        })
    });
});
module.exports = router;