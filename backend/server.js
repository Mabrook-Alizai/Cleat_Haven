import express from "express"
import cors from "cors"

// App Config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log(`Server started at http://localhost:${port}`)
})