import app from './app.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE_URL || ''

async function connectDB() {
try {
    await mongoose.connect(DB)
    console.log('✅ Database Connected Successfully')
    app.listen(5000, () => {
      console.log(`🚀 Server running on http://127.0.0.1:5000`)
    })
}catch (error) {
    console.error('❌ Database connection failed:', error)
    process.exit(1)
  }}

  connectDB();