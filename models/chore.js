const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  dateDone: {type: Date}, // Date the chore has been finished
  _id: { type: Schema.Types.ObjectId, auto: true },
  reminders: {type: [String] } // Array of strings containing reminders for each chore
});

// Virtual for chores's URL
ChoreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/whocleanwhat/chore/${this._id}`;
});

const Chore = mongoose.model('Chore', ChoreSchema);

module.exports = Chore;
