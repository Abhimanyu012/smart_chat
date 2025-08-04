// 👇 Import kar rahe hain mongoose aur bcrypt
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// 👤 Step 1: User Schema define kar rahe hain
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // bina naam ke user allow nahi
  },
  email: {
    type: String,
    required: true,
    unique: true // har email unique hoga
  },
  password: {
    type: String,
    required: true // password must hai
  },
  role: {
    type: String,
    default: 'user' // default role 'user', future me 'admin' bhi ho sakta hai
  }
}, {
  timestamps: true // createdAt & updatedAt auto milte hain
})


// Har baar jab user save kare, tab password hash ho
userSchema.pre('save', async function (next) {
  // Agar password me koi change nahi hua, to skip karo
  if (!this.isModified('password')) return next()

  // Salt generate karo
  const salt = await bcrypt.genSalt(10)

  // Password hash karo
  this.password = await bcrypt.hash(this.password, salt)

  // Aage badho
  next()
})


const User = mongoose.model('User', userSchema)
export default User
