const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.js');
router.post('/',(req,res,next) => {
    console.log(req.body.email[0]);
    User.find(req.body)
    .exec()
    .then(user =>{
        console.log(user[0].email);
        console.log(req.body.password);
        if(user[0].email.length < 1){
            res.status(409).json({
                message : "Auth Failed"
            });
        }
        else{
            if(user[0].password === req.body.password[0]){
                res.status(200).json({
                    message : "Sucess Auth"
                })
                
            }
            else{
                res.status(409).json({
                    message:"Auth Failed"
                })
            }
        }
    })
    .catch(err =>{
        if(err){
            res.status(500).json({
                message:"Error"
            })
        }
    });
});
module.exports = router;