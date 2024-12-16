const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json())

mongoose.connect("mongodb+srv://admin:admin@personal-db.7hde9.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=personal-DB")
    .then(() => { console.log("MongoDB Connected"); })
    .catch(() => {
        console.log("connection failed");
    })
app.post('/products', (req, res) => {
    try {

    } catch (error) {
    res.status(500).json("Internal Server Error :",error)
    }
})
app.listen(3000, () => {
    console.log("API is running on port 3000");
})
app.get('/', (req, res) => {
    res.json("MongoDB NodeJS integration")
})

