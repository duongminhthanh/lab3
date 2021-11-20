const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json())
// connect with database
const dbUserName = "thanh";
const dbPw = "thanh1234";
const dbName = "happy-shop";
const MONGO_URI = `mongodb+srv://${dbUserName}:${dbPw}@cluster0.gltfc.mongodb.net/${dbName}`;
mongoose.connect(MONGO_URI, () => {
    console.log("Connected to DB");
});

require('./app/routes')(app);

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`Hello world app run ning on port ${PORT}`);
})
