const express = require('express');
const taskManagerSchema = require("../models/taskManager")
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await taskManagerSchema.find();
        res.status(200).json({ status: "ok", response: data });
    } catch (error) {
        res.status(500).json({ status: "internal Error" })
    }
})

router.post("/", async (req, res) => {
    try {
        const data = req.body
        const newTask = new taskManagerSchema(data);
        const response = await newTask.save();
        res.status(200).json({ status: "ok", data: response })

    } catch (error) {
        res.status(500).json({ status: "internal Error" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await taskManagerSchema.findByIdAndDelete(id);
        res.status(200).json({ status: "ok", message: "succesfully deleted" })
    } catch (error) {
        res.status(500).json({ status: "internal Error" })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body
        const response = await taskManagerSchema.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            res.status(404).json({ message: "Todos Not Found" })
        }

        res.status(200).json(response)
    } catch (error) {

    }
})

module.exports = router;
