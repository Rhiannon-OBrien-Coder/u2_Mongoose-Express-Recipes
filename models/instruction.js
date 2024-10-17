const { Schema } = require('mongoose')

const Instruction = new Schema(
  {
    description: { type: String, required: true },
    oventemperateinF: { type: Number, required: true },
    ingredientmeasured: { type: Array, required: true },
    recipe: { type: Schema.Types.ObjectId, ref: 'recipe_id' }
  },
  { timestamps: true }
)

module.exports = Instruction