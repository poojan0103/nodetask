const User = require('../model/userSchema')
const jwt =   require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secertkey = "seceretkey"
const crypto = require('crypto')
const registeruser =async(req,res)=>{
    try {
        const { name, email,password } = req.body;

        //check if user exists
        const existingUser = await User.findOne({ $or :[{ name}, {email},{password}]});

        // if(existingUser){
        //     return res.status(400).json({ message : 'name or email already taken'})
        // }
        
        const user = new User ({
            name,
            email,
            password
        })
        await user.save();

        const token = jwt.sign({_id:user._id},secertkey,{expiresIn:'300000s'});
        
        // const salt = await bcrypt.genSalt(10);
        // const hashtoken = await bcrypt.hash(token,salt)
        user.tokens.push({ token  });
        
        await user.save();
        res.status(201).json({user})
       
    } catch (error) {
        console.error(error);
        res.status(500).json({error, message: "Internalserver error"})
        
    }
}

const getUserByToken = async (req, res) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token,secertkey);
      const user = await User.findOne({ 'tokens.token': token });
      if (!user) {
        throw new Error();
      }
      res.json({name:user.name, email:user.email,password:user.password});
    } catch (error) {
      res.status(401).json({ error: 'Please authenticate' });
    }
  };




module.exports = {
    registeruser,
    // getuser,
    getUserByToken
     

}