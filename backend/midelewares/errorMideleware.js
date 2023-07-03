const erroeHandler=(err,req,res,next)=>{
    
    const statuscode=res.statusCode===200?500:res.statusCode;
    res.status(statuscode);
    res.json({massage:'not found'})
    
}
module.exports={erroeHandler};