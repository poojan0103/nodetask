function errorhandler(error,req,res,next){
    console.log(error);
    res.status(500).send('Internal   Server Error');
    }
    module.exports =   errorhandler


 