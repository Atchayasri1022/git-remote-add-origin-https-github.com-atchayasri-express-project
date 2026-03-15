// // const express = require("express")
// // const app = express()

// // app.get("/", (req,res)=>{
// //   res.send("Welcome to my website")
// // })

// // app.get("/api",(req,res)=>{
// //   res.json({message:"Hello API"})
// // })

// // app.listen(3000,()=>{
// //   console.log("Server running on port 3000")
// // })


// const express = require("express")
// const path = require("path")

// const app = express()
// const PORT = 3000

// // serve static files
// app.use(express.static(path.join(__dirname, "public")))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`)
// })

const express = require("express")
const path = require("path")

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})