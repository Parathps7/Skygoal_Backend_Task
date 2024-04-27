const User = require('../models/userModel')
const Image = require('../models/imageModel')
const asyncHandler = require('express-async-handler')

const userDetails = asyncHandler(async(req,res) => {
    const email = req.params.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(email);
    if( !email || email == null )
    {
        res.status(400).send({success:false,message:"Please provide email of user in query"});
    }
    else if( !emailRegex.test(email) )
    {
        res.status(400).send({success:false,message:"Please provide correct email of the form example@example.com "})
    }
    else
    {
        const data = await User.findOne({email});
        if( !data || data == null )
        {
            res.status(400).send({success:false,message:"No user by that email available"})
        }
        else
        {
            const {password,token,__v, ...userDetails} = data._doc;
            const userImages = await Image.find({ addedBy: userDetails._id });
            res.status(200).send({userDetails,"images uploaded by user":userImages});
        }
    }
});

module.exports = {userDetails};