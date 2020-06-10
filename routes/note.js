const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");
const Notes = mongoose.model("notes")


router.get("/", async (req, res) => { 
        const user = await User.find({});
        res.send(user);
});

router.get("/notes", async (req, res) => { 
        let notes = await Notes.find({});
        res.send(notes);
});


router.post("/", async(req, res ) => {
         console.log(req.body);
      const user = new User();
      user.username = req.body.username;
      await user.save();
      res.send(user);   

});

router.post("/:userid/notes",async(req,res)=>{
    const user = await User.findOne({_id:req.params.userid});
    const notes = new Notes();
    notes.comment= req.body.comment;
    notes.user = user._id;
    await notes.save();
    res.send(notes);
})




module.exports = router;
