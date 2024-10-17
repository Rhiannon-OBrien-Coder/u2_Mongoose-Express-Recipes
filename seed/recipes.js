const db = require('../db')
const { CuisineType, Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const homestyle = await CuisineType.find({ name: 'Homestyle' })
  const french = await CuisineType.find({ name: 'French' })
  const creole = await CuisineType.find({ name: 'Creole' })

  const recipes = [
      {
        name: "Biscuits and Gravy",
        difficult: 1,
        isvegan: false,
        cuisinetype: homestyle[0]._id
      },
      {
        name: "Potatoes au Gratin",
        difficult: 2,
        isvegan: false,
        cuisinetype: french[0]._id
      },
      {
        name: "Gumbo",
        difficult: 3,
        isvegan: false,
        cuisinetype: creole[0]._id
      },
  ]

  await Recipe.insertMany(recipes)
  console.log('Created recipes with cuisine types!')
}
const run = async () => {
  await main()
  db.close()
}

run()