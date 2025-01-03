import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import cleatRouter from "./routes/cleatRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// DataBase Connection
connectDB();

// api endpoint
app.use("/api/cleat", cleatRouter)

app.get("/", (req,res) => {
    res.send("API working")
})

app.listen(port, ()=>{
    console.log(`Server started at http://localhost:${port}`)
})

// mongodb+srv://mabrook:lalaaaa@cluster0.ieyu0.mongodb.net/?