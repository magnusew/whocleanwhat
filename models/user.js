const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  _id: { type: Schema.Types.ObjectId, auto: true }
});

// Virtual for user's URL
UserSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/whocleanwhat/user/${this._id}`;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
