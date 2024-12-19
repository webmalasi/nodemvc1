const express = require("express");
const router = express.Router();

router.get("/getUsers",(req,res)=>{

    res.json({msg:"ok this is routing get "});
    
});

module.exports = router;