const express = require("express")
const cors = require("cors")
const data = require("./data/students")
let PORT = process.env.PORT || 3000

function studentsById (data, id){
  for(let i = 0; i < data.length; i++){
    if(data[i].id == id){
      return data[i]
    }
  }
  return null
}

const app = express()
app.use(cors())

app.get("/", function(request, response){
  response.json({data})
})

app.get("/:id", function(request, response){
  var record = studentsById(data, request.params.id)
  if(!record){
    response.status(404).json({
      error: {
        message: "No record found!"
      }
    })
  } else {
    response.json({data: record});
  }
})

app.listen(PORT)