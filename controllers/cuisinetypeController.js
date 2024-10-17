const Cuisinetype = require('../models');

const getAllCuisinetypes = async (req, res) => {
    try {
        const ctypes = await Cuisinetype.find()
        res.json(ctypes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTypesById = async (req, res) => {
    try {
        const { id } = req.params;
        const ctype = await Cuisinetype.findById(id)
        if (ctype) {
            return res.json(ctype);
        }
        return res.status(404).send('Cuisine with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//create a new plant -> POST
const createCuisinetype = async (req, res) => {
    try {
        const ctype = await new Cuisinetype(req.body)
        await ctype.save()
        return res.status(201).json({
            ctype,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//delete -> DELETE
const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Cuisinetype.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cuisine deleted");
        }
        throw new Error("Cuisine not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//update -> PUT
//uses all aspects of other functions. This is the problem child. Try to complete it last when possible
const updateCuisine = async (req, res) => {
    try {
        let { id } = req.params;
        let ctype = await Cuisinetype.findByIdAndUpdate(id, req.body, { new: true })
        if (ctype) {
            return res.status(200).json(ctype)
        }
        throw new Error("Cuisine not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCuisinetypes,
    getTypesById,
    createCuisinetype,
    updateCuisine,
    deleteCuisine
}