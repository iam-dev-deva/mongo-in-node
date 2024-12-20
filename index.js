const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ProductRoutes = require('./routes/product.routes')

//Middleware
app.use(express.json())

//routes
app.use('/api', ProductRoutes)

//DB Connection
mongoose.connect("mongodb+srv://admin:admin@personal-db.7hde9.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=personal-DB")
    .then(() => { console.log("MongoDB Connected"); })
    .catch(() => {
        console.log("connection failed");
    })

app.listen(3000, () => {
    console.log("API is running on port 3000");
})

app.get('/', (req, res) => {
    res.json("MongoDB NodeJS integration")
})