const Instruction = require('../models');

const getInstructionById = async (req, res) => {
    try {
        const { id } = req.params;
        const i = await Instruction.findById(id)
        if (i) {
            return res.json(i);
        }
        return res.status(404).send('Instruction with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getInstructionByRecipe = async (req, res) => {
    try { 
        const i = await Instruction.find( {'recipe': req.params.recipe})
        console.log(bike)
        if (i) {
            return res.json(i);
        }
        return res.status(404).send('Instruction type not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//create a new plant -> POST
const createInstruction = async (req, res) => {
    try {
        const i = await new Instruction(req.body)
        await i.save()
        return res.status(201).json({
            i,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//delete -> DELETE
const deleteInstruction = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Instruction.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Instruction deleted");
        }
        throw new Error("Instruction not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//update -> PUT
//uses all aspects of other functions. This is the problem child. Try to complete it last when possible
const updateInstruction = async (req, res) => {
    try {
        let { id } = req.params;
        let i = await Instruction.findByIdAndUpdate(id, req.body, { new: true })
        if (i) {
            return res.status(200).json(i)
        }
        throw new Error("Instruction not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getInstructionById,
    getInstructionByRecipe,
    createInstruction,
    updateInstruction,
    deleteInstruction
}