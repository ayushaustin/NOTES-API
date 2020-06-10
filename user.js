const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment")


router.get("/", async (req, res) => { 
    console.log(req.name);
        const posts = await Post.find({});
        res.send(posts);
});

router.get("/:postId", async (req, res) => {
         const posts = await Post.findOne({ _id: req.params.postId});
         res.send(posts);
   });

router.put("/:postId", async (req, res) => {
           const post = await Post.findOneAndUpdate(
               {
               _id: req.params.postId
           },
            req.body,
           {
               new: true,
               runValidators: true
           });
               res.send(post)
               
               
       
    });
   
router.delete("/:postId", async (req, res) => {
        try {
            const post = await Post.findByIdAndRemove({
                _id: req.params.postId
            });
                res.send(post)

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

router.post("/:postid/notes",async(req,res)=>{
    const user = await User.findOne({_id:req.params.postid});
    const notes = new Notes();
    comment.content= req.body.content;
    comment.user = user._id;
    await notes.save();

    user.comments.push(comment._id);
    await post.save();

    res.send(comment);
})
module.exports = router;
