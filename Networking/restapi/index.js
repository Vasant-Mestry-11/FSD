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

app.put('/todos/:id', (req, res) => {
  const { title, completed } = req.body;

  const { id } = req.params;

  let index = todos.findIndex((todo) => todo.id === +id);

  todos[index].title = title;
  todos[index].completed = completed || false;

  res.status(200).json({
    message: "Todo updated successfully!",
    todos
  });
})

// DELETE

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex(todo => todo.id === +id);

  if (index >= 0) {
    todos.splice(index, 1)
  }

  res.status(200).json({
    message: "Todo deleted successfully!",
    todos
  });
})

const PORT = 5111;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})