const express = require('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')

const banner_routes = require('./routes/banner_routes')
const properties_routes = require('./routes/properties_routes')
const contact_routes = require('./routes/contact_routes')
const bestFeat_routes = require('./routes/bestFeat_routes')

const {handleResourceNotFound, handleServerError} = require('./middleware/handleError')
const {arrayImage} = require('./middleware/images')

require('./config/db')
app.use(express.json())
app.use(fileUpload()); //for files
app.use(express.static('uploads'))
app.use(cors())
app.use(arrayImage)
 
app.use('/api', banner_routes)
app.use('/api/properties', properties_routes)
app.use('/api/contact', contact_routes)
app.use('/api', bestFeat_routes)



app.use(handleResourceNotFound);
app.use(handleServerError);

app.listen(8005, ()=>{
    console.log("Server started in port 8005");
})