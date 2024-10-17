const { Schema } = require('mongoose')

const CuisineType = new Schema(
  {
    name: { type: String, required: true },
    origin: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = CuisineType