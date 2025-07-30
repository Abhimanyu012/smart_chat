// Import mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Define a new schema for the User model using mongoose Schema constructor
const userSchema = new mongoose.Schema({
  // Username field configuration
  username: {
    type: String,        // Data type is string
    required: true,      // This field is mandatory
    unique: true,        // Ensures no duplicate usernames in database
    trim: true          // Removes whitespace from beginning and end
  },
  // Email field configuration
  email: {
    type: String,        // Data type is string
    required: true,      // This field is mandatory
    unique: true,        // Ensures no duplicate emails in database
    lowercase: true,     // Converts email to lowercase before saving
    trim: true          // Removes whitespace from beginning and end
  },
  // Password field configuration
  password: {
    type: String,        // Data type is string
    required: true,      // This field is mandatory
    minlength: 6        // Password must be at least 6 characters long
  },
  // Timestamp field for when user account was created
  createdAt: {
    type: Date,          // Data type is Date object
    default: Date.now    // Automatically sets to current date/time when user is created
  }
});

// Export the User model based on the userSchema for use in other files
module.exports = mongoose.model('User', userSchema);
