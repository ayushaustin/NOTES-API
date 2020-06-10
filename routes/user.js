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

router.put("/:userId", async (req, res) => {
           const user = await User.findOneAndUpdate(
               {
               _id: req.params.notesId
           },
            req.body,
           {
               new: true,
               runValidators: true
           });
               res.send(user)               
    });
   

   
router.delete("/:userId", async (req, res) => {
        try {
            const user = await Post.findByIdAndRemove({
                _id: req.params.userId
            });
                res.send(user)

        } catch(error) {
                res.send(500)
        }            
    })


router.post("/", async(req, res ) => {
         console.log(req.body);   
         const user = new User();
         post.content = req.body.content;
         await user.save();
         res.send(user);   

});

//create a Comment

router.post("/:userid/notes",async(req,res)=>{
            const user = await User.findOne({_id:req.params.userid});
            const notes = new Notes();
            comment.content= req.body.content;
            comment.user = user._id;
            await notes.save();
            post.comments.push(comment._id);
            await post.save();
            res.send(notes);
    })
module.exports = router;
