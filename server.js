const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST Method
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;

    // Separate numbers and alphabets
    const numbers = data.filter(d => !isNaN(d));
    const alphabets = data.filter(d => isNaN(d));

    // Find highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(a => a === a.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || null;

    // Simulate file validation (you can add actual validation logic later)
    const file_valid = file_b64 ? true : false;
    const file_mime_type = "image/png"; // Dummy MIME type
    const file_size_kb = 400; // Dummy file size

    const response = {
        is_success: true,
        user_id: "your_name_ddmmyyyy",
        email: "your_email@srm.edu.in",
        roll_number: "your_roll_number",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
        file_valid,
        file_mime_type,
        file_size_kb
    };

    res.status(200).json(response);
});

// GET Method
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Vercel requires exporting the app in serverless functions
module.exports = app;
