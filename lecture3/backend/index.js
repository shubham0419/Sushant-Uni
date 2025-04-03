const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TODOs = [
  {
    id:1,
    title:"React",
    discription:"learning react js",
  }
]

app.get("/allTodo", (req, res) => {
    try {
      res.status(200).json({TODOs});
    } catch (error) {
      res.status(400).json({message:error.message});
    }
});

app.post("/create",(req,res)=>{
  try {
    const {title,description}= req.body;
    const todo = {
      id:Math.random(),
      title,
      description,
    }
    TODOs.push(todo);
    res.status(200).json({todo});
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

app.put("/update/:id",(req,res)=>{
  try {
    const {id} = req.params;
    const {title,description} = req.body;
    const todo = TODOs.find((t)=>{return t.id==id})
    const updatedTodo = {
      id:todo.id,
      title,
      description
    }

    TODOs[TODOs.findIndex(todo)] = updatedTodo;

    res.status(200).json({updatedTodo});
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

app.delete("/delete/:id",(req,res)=>{
  try {
    const {id} = req.params;
    const todo = TODOs.find((t)=>{return t.id==id})

    TODOs.splice(TODOs.findIndex(todo),1);
    res.status(200).json({todo});
  } catch (error) {
    res.status(400).json({message:error.message});
    
  }
})

app.listen(PORT, () => console.log("Server running on port " + PORT));