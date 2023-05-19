const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/books',router);




mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.5ojksyo.mongodb.net/bookStore?retryWrites=true&w=majority"    
)
.then(()=>console.log("connected"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));


