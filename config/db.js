const mongoose = require('mongoose');

const DB = 'mongodb+srv://shakyanischal1111:9ROM1HVpM7XZKuWY@cluster0.kxomyqq.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
  console.log(`DataBase connected successfully`);
}).catch((err)=> console.log(err)); 