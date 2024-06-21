const asyncHandler = require("express-async-handler");
const User = require("../models/user");


exports.chore_display = asyncHandler(async (req, res, next) => {
    
  const allUsers = await User.find({}, "name");

  res.render("front_page", {
    title: "WHOCLEANWHAT",
    users: allUsers,
  });
});
  

exports.add_user = asyncHandler(async (req, res, next) => {
  try {
    newUser = new User({
      name : "Iben"
    })
    const savedUser = await newUser.save();
    res.send( savedUser);
  } catch (error) {
      console.log(error);
  }

})
  
exports.display_user = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).exec();
  console.log(user);
  res.render('user_details', {
    title: "User details",
    user: user,
  })

})