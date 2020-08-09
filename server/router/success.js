const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
router.post('/',(req,res)=>{
    console.log(req.body);
    User.find(req.body)
    .exec()
    .then(user=>{
        res.send(user[0])
    })
    .catch(err=>{
        res.status(404).json({
            message:"Something went wrong"+err
        })
    })
})
module.exports = router;