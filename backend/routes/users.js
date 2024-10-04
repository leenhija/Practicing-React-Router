const express = require("express");
const { get, add } = require("../data/users");
const router = express.Router();

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
try {
    await add(data);
    res.status(201).json({ message: 'user added.'});
  } catch (error) {
    next(error);
  }
})
module.exports=router;