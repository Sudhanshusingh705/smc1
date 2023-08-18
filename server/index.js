// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const twilio = require('twilio');


const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;


// const client = twilio(accountSid, authToken);

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());


// Send OTP
app.post('/api/send-otp', (req, res) => {
    const { phoneNumber } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate random OTP
    const message = `Your OTP for login is: ${otp}`;
  
    client.messages
      .create({
        body: message,
        from: twilioPhoneNumber,
        to: phoneNumber,
      })
      .then(() => {
        res.status(200).json({ message: 'OTP sent successfully' });
      })
      .catch(error => {
        console.error('Error sending OTP:', error);
        res.status(500).json({ error: 'Error sending OTP' });
      });
  });

  
// Verify OTP (Login)
app.post('/api/login', (req, res) => {
    const { phoneNumber, otp } = req.body;
    // In a real application, you'd verify the OTP here and return appropriate responses.
    // For demonstration purposes, let's assume OTP verification is successful.
    res.status(200).json({ message: 'Logged in successfully' });
  });



mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Authentication middleware
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// User model
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
}));

// Register a new user

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    }
  });
  
  

// User login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      // Compare the password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Create and send JWT token
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      res.header('Authorization', token).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Error logging in' });
    }
  });


// Protected route
app.get('/api/protected', authenticateUser, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
