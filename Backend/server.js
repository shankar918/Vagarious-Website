import express from "express";
import cors from "cors";
import database from "./database.js"; 
import adminRoutes from './routes/adminRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import  applyRoutes from './routes/applyRoutes.js'

const app=express();

app.use(cors())
app.use (express.json())

app.get('/',(req,res) =>{
  res.send("staffing website backend running ")

})
app.use('/api/admin',adminRoutes)
app.use('/api',jobRoutes)
app.use('/api',applyRoutes)

const PORT =5000;
app.listen (PORT,()=>console.log(`server is running on htt://localhost:${PORT}`))





