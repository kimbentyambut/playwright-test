const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route for form submission
app.post('/submit', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ message: `Hello, ${name}! Your data was submitted successfully.` });
  } else {
    res.status(400).json({ error: 'Name is required!' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
