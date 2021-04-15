const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then((self)=>{
   console.log('MongoDB is connected') 
  return self.connection.dropDatabase() //return this promise
})
.then(()=>{
      //Create ---returns a promise but waits for the connection to works before it runs
      //could also craated outside this .connect method
        return MyModel.create([{name: 'Clever', age : 18},{name: 'Mimi', age : 18}])
        // .then(()=>{
        //     console.log('MongoDB is connected')  
        // })
        // .catch(()=>{
        //     console.log('connection failed') 
        // })
})
.then(()=>{
    //return output from the .create Method
   console.log("Data Added") 
        //Read
        MyModel.find({name: "Clever"})
        .then((data)=>{
        console.log("Data fecthed",data)  
        })
        .catch(()=>{
        console.log("Failed to create")
        })
         
 //UPDATE
        // //Other find methods
        // MyModel.updateOne({name: "Clever"}, {name: "Clever Derenbach"})
        // .then()
        // .catch()

        // MyModel.findByIdAndUpdate("607851c15570d40a6c4dcaca", {name: "Clever Derenbach"})
        // .then()
        // .catch()

        // MyModel.updateMany({name: "Clever"}, {name: "Clever Derenbach"})
        // .then()
        // .catch()

  //DELETE      
        // MyModel.deleteMany({name: "Clever"}, {name: "Clever Derenbach"})
        // .then()
        // .catch()

        // MyModel.deleteOne({name: "Clever"}, {name: "Clever Derenbach"})
        // .then()
        // .catch()


})
.catch(()=>{
    console.log('connection failed') 
})

let MyModel = require('./models/MyModel')


