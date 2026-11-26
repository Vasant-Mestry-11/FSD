import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())

const todos = [
  {
    id: 1,
    title: "Task 1",
    completed: false
  },
  {
    id: 2,
    title: "Task 2",
    completed: true
  },
]

app.all('/', (req, res) => {
  res.send("Hello world")
})

// READ
app.get('/todos', (req, res) => {
  return res.status(200).json({
    message: "Todos fetched successfully!",
    todos
  })
})

// CREATE

app.post('/todos', (req, res) => {
  const { title } = req.body;

  const newTodo = { id: todos.length + 1, title, completed: false };

  todos.push(newTodo);

  res.status(200).json({
    message: "Todo added successfully!",
    todo: newTodo
  })
})

// UPDATE

// DELETE

const PORT = 5111;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})