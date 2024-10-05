const express = require("express");
const { get, add } = require("../data/users");
const router = express.Router();
const {isValidText , isValidEmail} =require('../util/validation')
router.post("/login", async (req, res, next) => {
  const data = req.body;
  try {
    const user = await get(data.email, data.password);
    if (user) {
      return res.status(200).json({
        message: "user is Authoriazed",
      });
    }
  } catch (error) {
    next(error);
  }
});
router.post("/signup",async(req , res , next)=>{
const data=req.body;
let errors={};
if(!isValidText(req.body.country)){
  errors.country='no country'
}
if(!isValidEmail(req.body.email)){
  errors.email='email not valid'
}
const checkIfUserExist= await get(data.email , data.password);
if(!checkIfUserExist){
  return res.status(409).json({
    message: "user already have an account",
  });
}
if (Object.keys(errors).length > 0) {
  return res.status(422).json({
    message: 'Adding the user failed due to validation errors.',
    errors,
  });
}
try {
    await add(data);
    res.status(201).json({ message: 'user added.'});
  } catch (error) {
    next(error);
  }
})
module.exports=router;