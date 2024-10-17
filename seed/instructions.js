const db = require('../db')
const { Recipe, Instruction } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const bandg = await Recipe.find({ name: "Biscuits and Gravy" })
  const pag = await Recipe.find({ name: "Potatoes au Gratin" })
  const gumbo = await Recipe.find({ name: "Gumbo" })

  const instructions = [
      {
        description: "1)Brown sausage in a large saucepan. Use a paper towel to blot out most of the grease from the pan. 2)Add flour, butter, and half & half. Cook on medium-low, stirring often, for several minutes until thickened. 3)Add thyme, rosemary, red pepper flakes and black pepper. 4)Serve over warm biscuits.",
        oventemperateinF: null,
        ingredientsmeasured: [
            "8 flaky buttermilk biscuits",
            "1 pound of pork sausage",
            "2.5 tablespoons of all purpose flour",
            "2.5 cups of half and half",
            "1 tablespoon of butter",
            "1/8 teaspoon dried thyme",
            "1/8 teaspoon dried rosemary",
            "1/8 teaspoon crushed red pepper",
            "freshly ground pepper to taste"
        ],
        recipe: bandg[0]._id
      },
      {
        description: 'Step 1) Preheat oven to 375° and butter a large 3 qt baking dish. Slice potatoes 1/4" thick and place in water to keep from browning. Step 2) In a large skillet over medium heat, melt butter. Add garlic and cook until fragrant, about 1 minute. Add cream, milk, thyme, nutmeg, salt, and red pepper flakes. Bring to a boil and reduce heat to low. Let simmer 10 minutes. Remove from heat. Step 3) Layer a third of potatoes, slightly overlapping, in prepared dish then pour a third of cream mixture over potatoes. Repeat with remaining potatoes and cream to make two more layers. Sprinkle Gruyère over top. Step 4) Cover with foil and bake for 45 minutes. Uncover, sprinkle with Parmesan and continue baking until potatoes are tender and top is golden, 15 to 20 minutes. Let sit for 10 minutes before serving.',
        oventemperateinF: 375,
        ingredientsmeasured: [
            "6 russet potatoes, cleaned and peeled",
            '2 Tbsp. butter, plus more for pan',
            '2 cloves garlic, minced',
            '1 1/2 c. heavy cream',
            '1/4 c. milk',
            '1 Tbsp. freshly chopped thyme',
            'Pinch of nutmeg',
            'Kosher salt',
            'red pepper flakes',
            '1 1/2 c. shredded Gruyère',
            '1/2 c. freshly grated Parmesan'
        ],
        recipe: pag[0]._id
      },
      {
        description: "Step 1) Gather all ingredients. Step 2) Make the roux: Whisk together flour and 3/4 cup bacon drippings in a large, heavy saucepan over medium-low heat until smooth. Cook roux, whisking constantly, until it turns a rich mahogany brown color. This can take 20 to 30 minutes; watch heat carefully and whisk constantly or roux will burn. Remove from heat; continue whisking until mixture stops cooking. Step 3) Make the gumbo: Place celery, onion, green bell pepper, and garlic into the work bowl of a food processor, and pulse until all vegetables are very finely chopped. Step 4) Stir vegetables into roux, and mix in sliced sausage. Cook over medium-low heat, stirring constantly, until vegetables are tender, 10 to 15 minutes. Remove from heat and set aside. Step 5) Combine water and beef bouillon cubes in a large Dutch oven or soup pot and bring to a boil over medium-high heat. Stir until bouillon cubes dissolve, then whisk roux mixture into the boiling water. Step 6) Reduce heat to a simmer and mix in sugar, salt, hot pepper sauce, Cajun seasoning, bay leaves, thyme, stewed tomatoes, and tomato sauce. Simmer soup over low heat for 1 hour; mix in 2 teaspoons of file gumbo powder at the 45-minute mark. Step 7) Meanwhile, melt 2 tablespoons bacon drippings in a skillet over medium heat. Add okra and vinegar and cook for 15 minutes; remove okra with a slotted spoon, and stir into the simmering gumbo. Step 8) Mix in crabmeat, shrimp, and Worcestershire sauce, and simmer until flavors have blended, 45 more minutes. Stir in 2 more teaspoons of file gumbo powder just before serving. Step 9) Serve hot and enjoy!",
        oventemperateinF: null,
        ingredientsmeasured: [
            '1 cup all-purpose flour',
            '¾ cup bacon drippings',
            '1 cup coarsely chopped celery',
            '1 large onion, coarsely chopped',
            '1 large green bell pepper, coarsely chopped',
            '2 cloves garlic, minced',
            '1 pound andouille sausage, sliced',
            '3 quarts water',
            '6 cubes beef bouillon',
            '1 tablespoon white sugar',
            'salt to taste',
            '2 tablespoons hot pepper sauce (such as Tabasco), or to taste',
            '½ teaspoon Cajun seasoning blend (such as Tony Chacheres), or to taste',
            '4 bay leaves',
            '½ teaspoon dried thyme leaves',
            '1 (14.5 ounce) can stewed tomatoes',
            '1 (6 ounce) can tomato sauce',
            '4 teaspoons file powder, divided',
            '2 tablespoons bacon drippings',
            '2 (10 ounce) packages frozen cut okra, thawed',
            '2 tablespoons distilled white vinegar',
            '1 pound lump crabmeat',
           ' 3 pounds uncooked medium shrimp, peeled and deveined',
            '2 tablespoons Worcestershire sauce'
        ],
        recipe: gumbo[0]._id
      },
  ]

  await Instruction.insertMany(instructions)
  console.log('Created instructions for recipes!')
}
const run = async () => {
  await main()
  db.close()
}

run()