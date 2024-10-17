const mongoose = require('mongoose')
const CuisineTypeSchema = require('./cuisinetype')
const RecipeSchema = require('./recipe')
const InstructionSchema = require('./instruction')

const CuisineType = mongoose.model('CuisineType', CuisineTypeSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Instruction = mongoose.model('Instruction', InstructionSchema)

module.exports = {
    CuisineType,
    Recipe,
    Instruction
}