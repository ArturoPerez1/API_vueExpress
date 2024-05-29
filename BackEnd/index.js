const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
}
const bd =  {
    name: "Arturo",
    lastName: "Perez"
}


app.use(cors(corsOptions))

app.get('/index', (req, res) => {
  res.send(bd)
})

app.post('/user', (req,res)=>{
    res.send('Hola mundo')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})