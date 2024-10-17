const Recipe = require('../models');

const getAllRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find()
        res.json(recipe)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipesById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe);
        }
        return res.status(404).send('Cuisine with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//create a new plant -> POST
const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//delete -> DELETE
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//update -> PUT
//uses all aspects of other functions. This is the problem child. Try to complete it last when possible
const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(ctype)
        }
        throw new Error("Recipe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllRecipes,
    getRecipesById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}