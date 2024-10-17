const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    difficult: { type: Number, required: true },
    isvegan: { type: Boolean, required: true },
    cuisinetype: { type: Schema.Types.ObjectId, ref: 'cuisinetype_id' }
  },
  { timestamps: true }
)

module.exports = Recipe