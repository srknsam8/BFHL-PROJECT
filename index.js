const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST Method
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;  // Extract the data array and file (base64 encoded string)

    // Check if data exists and is an array
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid data format. Expecting an array." });
    }

    // Separate numbers and alphabets
    const numbers = data.filter(d => !isNaN(d));
    const alphabets = data.filter(d => isNaN(d));

    // Find highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(a => a === a.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || null;

    // Simulate file validation (you can add actual validation logic later)
    const file_valid = file_b64 ? true : false; // Check if a file was provided
    const file_mime_type = file_valid ? "image/png" : null;  // Assuming a dummy MIME type
    const file_size_kb = file_valid ? 400 : null; // Assuming a dummy file size

    // Build the response
    const response = {
        is_success: true,
        user_id: "your_name_ddmmyyyy",  // Example: Replace with actual user info
        email: "your_email@srm.edu.in",  // Example: Replace with actual email
        roll_number: "your_roll_number",  // Example: Replace with actual roll number
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
        file_valid,
        file_mime_type,
        file_size_kb
    };

    // Send the response
    res.status(200).json(response);
});

// GET Method
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Export the Express app for Vercel's serverless functions
module.exports = app;
