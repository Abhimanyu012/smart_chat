// 👉 Mongoose import kar rahe hain
import mongoose from 'mongoose'

// ✅ Ek async function banate hain jo MongoDB se connect kare
const connectDB = async () => {
  try {
    // MongoDB URI ko .env file se le rahe hain
    await mongoose.connect(process.env.MONGO_URI)

    // Agar success ho gaya
    console.log('✅ MongoDB connected successfully')
  } catch (error) {
    // Agar koi error aaya to usse console me print karo
    console.error('❌ MongoDB connection failed:', error.message)

    // App ko exit kar do (1 = error exit code)
    process.exit(1)
  }
}

// 📤 Ye function export kar rahe hain taaki server.js me use ho sake
export default connectDB
