const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/areas', db.getAreas)
app.get('/areas/:id', db.getAreaById)
app.post('/areas', db.createArea)
app.put('/areas/:id', db.updateArea)
app.delete('/areas/:id', db.deleteArea)
app.get('/humans', db.getHumans)
app.get('/humans/:id', db.getHumanById)
app.post('/humans', db.createHuman)
app.put('/humans/:id', db.updateHuman)
app.delete('/humans/:id', db.deleteHuman)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
