const db = require('../db')
const { CuisineType } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cuisinetypes = [
    {
    name: "Homestyle",
    origin: "Southern USA",
    },
    {
    name: "French",
    origin: "France",
    },
    {
    name: "Creole",
    origin: "Louisianna, USA",
    },
  ]
  await CuisineType.insertMany(cuisinetypes)
  console.log('Created various cuisine types!')
}


const run = async () => {
  await main()
  db.close()
}

run()