module.exports = reqfilter=(req,res,next)=>{
    // console.log(req.query.age)
    // console.log(typeof req.query.age)
    // const age = parseInt(req.query)
    if(!req.query.age)
    {
        res.send("please provide age")
    }
    else if(req.query.age <18){
        res.send("You are under age for this site")
        
    }
    else{
        next();
    }
}