import express, { json } from 'express';


const app = express();


app.all('/', (req, res) => {
  res.send("Hello world")
})

const PORT = 5111;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})

const res = JSON.parse(xml)

console.dir(res)