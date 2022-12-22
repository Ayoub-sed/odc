import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Cors from 'cors'
import postRoutes from './middlewares/multer.js'

const app = express()

app.use(bodyParser.json({limit: "30mb" , extended:true}));
app.use(Cors());
app.use('/multer',postRoutes);
const CONNECTION_URL = "mongodb+srv://ayoub-sed:123samba@cluster0.akmd1sm.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=> console.log(`server runnining on port: ${PORT}`)))
.catch((error) => console.log(error.message));


