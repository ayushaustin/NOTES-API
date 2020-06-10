const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");
const Notes = mongoose.model("notes")



router.get("/notes", async (req, res) => { 
        let notes = await Notes.find({});
        res.send(notes);
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
