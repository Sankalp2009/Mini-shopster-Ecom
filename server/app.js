import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import cors from 'cors'

// Express instances creation
const app = express();

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors({
  origin: "*"
}))

app.use(express.json())

// Schema + Model
// Step1: creating an constructor function like function
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Please Enter Email'],
  },

  password: {
    type: String,
    required: [true, 'please Enter password'],
  },
})

//Step2: Calling that constructor Function
const User = mongoose.model('USER', userSchema)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Register logic
app.post('/api/v1/auth/register', async (req, res) => {
  // Get data from server using req.body
  console.log(req.body)
  const { email, password: plainTextPassword } = req.body

  // Do some basic validation
  if (!email || !plainTextPassword) {
    return res.status(400).json({
      status: 'Failed',
      message: 'Data not correct',
    })
  }

  // duplicate user check
  const existingUser = await User.findOne({ email: email })
  if (existingUser)
    return res.status(409).json({
      status: 'fail',
      message: 'user Already Exist',
    })

  // hash it before saving to database
  const hashPassword = await bcrypt.hash(plainTextPassword, 10)
  console.log(hashPassword)

  try {
    let response = await User.create({
      email: email,
      password: hashPassword,
    })
    console.log(response)
    return res.status(201).json({
      status: 'success',
      message: 'user created successfully',
      user: {
        Email: response.email,
      },
    })
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: error.message,
    })
  }
})

// Login Logic
app.post('/api/v1/auth/login', async (req, res) => {
  try {
    const { email, password: plainTextPassword } = req.body

    // Do some basic validation
    if (!email || !plainTextPassword) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Data not correct',
      })
    }

    // Check Empty user
    const user = await User.findOne({ email })
    if (!user)
      return res.status(404).json({
        message: 'user Does not Exist',
      })

    // hash it before saving to database
    const hashPassword = await bcrypt.compare(plainTextPassword, user.password)
    if (!hashPassword) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Password Incorrect',
      })
    }

    // Generate token by sending payload with secret key
    const token = jwt.sign( {
      sub: user._id,
      email: user.email,
    },'secret_key')

    return res.status(200).json({
      status: 'success',
      message: 'Login Successful',
      accessToken: token,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Login Failed',
    })
  }
})

export default app  