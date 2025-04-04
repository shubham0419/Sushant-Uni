const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TODOs = [
  {
    id: 1,
    title: "React",
    description: "learning react js",
  },
  {
    id: 2,
    title: "JavaScript",
    description: "learning JavaScript basics",
  },
  {
    id: 3,
    title: "Node.js",
    description: "learning backend development with Node.js",
  },
  {
    id: 4,
    title: "CSS",
    description: "mastering styling with CSS",
  },
  {
    id: 5,
    title: "HTML",
    description: "learning the fundamentals of web pages",
  },
  {
    id: 6,
    title: "Vue.js",
    description: "exploring front-end development with Vue.js",
  },
  {
    id: 7,
    title: "Python",
    description: "learning Python for data science",
  },
  {
    id: 8,
    title: "SQL",
    description: "learning database management with SQL",
  },
  {
    id: 9,
    title: "Git",
    description: "learning version control with Git",
  },
  {
    id: 10,
    title: "Express.js",
    description: "learning web framework Express.js for Node.js",
  },
];

app.get("/allTodo", (req, res) => {
  try {
    res.status(200).json({ TODOs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/create", (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = {
      id: Math.random(),
      title,
      description,
    };
    TODOs.push(todo);
    res.status(200).json({ TODOs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = TODOs.find((t) => {
      return t.id == id;
    });
    const updatedTodo = {
      id: todo.id,
      title,
      description,
    };

    TODOs[TODOs.indexOf(todo)] = updatedTodo;

    res.status(200).json({ TODOs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todo = TODOs.find((t) => {
      return t.id == id;
    });

    TODOs.splice(TODOs.indexOf(todo), 1);
    res.status(200).json({ TODOs });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log("Server running on port " + PORT)); 