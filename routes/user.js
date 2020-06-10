const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");


router.get("/", async (req, res) => { 
        const user = await User.find({});
        res.send(user);
});

router.post("/", async(req, res ) => {
         console.log(req.body);
      const user = new User();
      user.username = req.body.username;
      await user.save();
      res.send(user);   

});

module.exports = router;
