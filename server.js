const express = require("express")
const connectDb = require("./db/db")


const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const sessionRoutes = require("./routes/sessionRoutes")

const app = express()
const PORT= 3000


app.use(express.json()) 

app.use("/api/auth", authRoutes) 

app.use("/api/users", userRoutes)



app.use("/api/session", sessionRoutes) 
connectDb() 
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto: "+ PORT)            
}) 