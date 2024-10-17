const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const plantController = require('./controllers/plantController')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/plants', plantController.getAllPlants)

app.get('/plants/:id', plantController.getPlantById)

//post goes to the INDEX route because we are adding something new
app.post('/plants', plantController.createPlant)

//update and delete will need to be in a SHOW route because we're targeting one item
app.put('/plants/:id', plantController.updatePlant)
app.delete('/plants/:id', plantController.deletePlant)