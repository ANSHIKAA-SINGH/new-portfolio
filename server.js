const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Allow frontend requests

// Connect to MongoDB (Ensure MongoDB is running)
mongoose
  .connect('mongodb://127.0.0.1:27017/formData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Define Schema and Model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  msg: String,
});

const Form = mongoose.model('forms', formSchema);

// API Route for handling form submission
app.post('/register', async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newForm = new Form({ name, email, msg });
    await newForm.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/register', (req, res) => {
  res.json({ message: 'This is the register route. Use POST to submit data.' });
});
