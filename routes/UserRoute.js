const express = require('express');
const router = express.Router();
const userModel = require("../models/UsersModel");


router.post('/add_user',async function(req,res){
    const user = new userModel(req.body);
  
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
});

router.get('/get_user',async function(req,res){
    const {name} = req.body;
    const id = await userModel.find({name});
    if(id){
      console.log(id);
      res.send(id);
    }else{
      console.log('err');
      res.send('err');
    }
    
//       try {

//         res.send('Finded');
//       } catch (error) {
//         res.status(500).send(error);
//       }
});

module.exports = router;