const express = require('express')
const dbconnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express()


//using async await

// const main = async()=>{
//     let data = await dbconnect();
//     data = await data.find({name:'Ishan'}).toArray();
//     console.log(data);
// }
// main()


//using promise
// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
//})

const bodyParser = require('body-parser')

const PORT = 3000

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.listen(PORT, () => {
    console.log('server is running on port', PORT)
  
  
  });
//   mongoose.connect('mongodb://localhost:27017/admin', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to database'))
// .catch(err => console.error('Error connecting to MongoDB', err));
app.get('/',async (req,res)=>{
    let data = await dbconnect();
    data = await data.find().toArray()
    // console.log(data);
    res.send(data);
});


app.post('/',async (req,res)=>{
    let data = await dbconnect();
   let  result = await data.insertMany(req.body)
    // console.log(data);
    res.send(result);
    });

  app.put('/:name',async (req,res)=>{
    let data = await  dbconnect();
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    res.send({result : "update"})
    })


    app.delete('/:id',async (req,res)=>{
        const data = await  dbconnect();
        const result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
        res.send(result)
    })

        

        

