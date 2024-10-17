const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cuisinetypeController = require('./controllers/cuisinetypeController')
const recipeController = require('./controllers/recipeController')
const instructionController = require('./controllers/instructionController')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))

//cuisines
app.get('/cuisines', cuisinetypeController.getAllCuisinetypes)
app.get('/cuisines/names/:name', cuisinetypeController.getCuisineByName)
app.get('/cuisines/:id', cuisinetypeController.getTypesById)
app.post('/cuisines', cuisinetypeController.createCuisinetype)
app.put('/cuisines/:id', cuisinetypeController.updateCuisine)
app.delete('/cuisines/:id', cuisinetypeController.deleteCuisine)

//recipes
app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/names/:name', recipeController.getRecipeByName)
app.get('/recipes/:id', recipeController.getRecipesById)
app.post('/recipes', recipeController.createRecipe)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)

//instructions
app.get('/instructions/:id', instructionController.getInstructionById)
app.get('/instructions/recipe/:recipe', instructionController.getInstructionByRecipe)
app.post('/instructions', instructionController.createInstruction)
app.put('/instructions/:id', instructionController.updateInstruction)
app.delete('/instructions/:id', instructionController.deleteInstruction)

app.get('/*', (req, res) => res.send({ error: "404 page not found" }))