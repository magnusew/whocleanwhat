const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Chore = require("../models/chore");


exports.chore_display = asyncHandler(async (req, res, next) => {
    
  const allUsers = await User.find({}, "name");
  const allChores = await Chore.find({}, "name");

  res.render("front_page", {
    title: "WHOCLEANWHAT",
    users: allUsers,
    chores: allChores,
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
      next(error);
  }
})
  
exports.chore_details_get = asyncHandler(async (req, res, next) => {
  const chore = await Chore.findById(req.params.id).exec();
  res.render('chore_details', {
    title: "Chore details",
    chore: chore,
  })
})

exports.user_details_get = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).exec();
  console.log(user);
  res.render('user_details', {
    title: "User details",
    user: user,
  })
})

// Display create chore form
exports.create_chore_get = asyncHandler(async (req, res, next) => {
  try {
    const allUsers = await User.find({}, "name");
    res.render('create_chore_form', {
      title: "Create Chore",
      allUsers: allUsers,
    });
  } catch (error) {
    next(error);  // Pass the error to the error handling middleware
  }
});

// Submit create chore form
exports.create_chore_post = asyncHandler(async (req, res, next) => {
  try {
    newChore = new Chore({
      name : req.body.name,
      reminders: req.body.reminders
    })
    const savedChore = await newChore.save();
    res.render("chore_details", {
      title: "Chore details",
      chore: savedChore,
    }
    )
  } catch (error) {
      next(error);
  }
})

// Display create user form
exports.create_user_get = asyncHandler(async (req, res, next) => {
  try {
    const allUsers = await User.find({}, "name");
    res.render('create_user_form', {
      title: "Create User",
      allUsers: allUsers,
    });
  } catch (error) {
    next(error);  // Pass the error to the error handling middleware
  }
});

exports.create_user_post = asyncHandler(async (req, res, next) => {
  try {
    newUser = new User({
      name : req.body.name,
    })

    const savedUser = await newUser.save();

    res.render("user_details", {
      title: "User details",
      user: savedUser,
    }
    )
  } catch (error) {
      next(error);
  }
})