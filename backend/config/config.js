const mongoose=require('mongoose');
const connectDb= async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,)
        console.log('db connected')
    } catch (error) {
        console.log('error is -------->'+error)
        process.exit(1);
    }
}
module.exports=connectDb;


// {
//     useUnifiedTopology: true,
//         ueNewUrlParser: true,
//             useCreateIndex: true
//  }