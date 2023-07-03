
const express = require('express');
const product = require('./data/Product')
const dotenv = require('dotenv');
const connectDb = require('./config/config')
const productRoutes=require('./routes/productsRoutes')
const {erroeHandler}=require('./midelewares/errorMideleware')
const userRoutes=require('./routes/userRoutes')
dotenv.config();//configuring env
connectDb();


const app = express();
app.use(express.json());//mideleware for body parser
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/api/",productRoutes)
app.use("/api/user",userRoutes)
app.use(erroeHandler)
app.get('/', (req, res) => {
    res.send('<h1>welcome to node server </h1>')
})


app.listen(process.env.PORT, () => console.log('server running on port 8000')); 