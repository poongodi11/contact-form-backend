const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://<Your_Username>:<Your_Password>@cluster0.oeyunem.mongodb.net/contactFormDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


// ✅ Mongoose model
const Contact = mongoose.model('Contact', {
  name: String,
  email: String,
  message: String
});

// ✅ Handle contact form submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();

    console.log('✅ Saved to MongoDB:', contact);
    res.json({ success: true, message: 'Message saved!' });
  } catch (err) {
    console.error('❌ Failed to save:', err);
    res.status(500).json({ success: false, message: 'Database error' });
  }
});

// ✅ Start server
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
