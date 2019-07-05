const express = require('express');
const Aircraft = require('../models/aircraft');
const router = new express.Router();

router.post('/aircraft', async(req, res) => {
    const aircraft = new Aircraft({
        ...req.body
    })
    try{
        await aircraft.save();
        res.status(201).send(aircraft);
    }catch(error){
        res.status(400).send(error.message);
    }
})

// Get by id
router.get('/aircraft/:id', async(req, res) => {
    const _id = req.params.id;

    try{
        const aircraft = await Aircraft.findOne({_id});
        if(!aircraft){
            return res.status(404).send();
        }
        res.send(aircraft);
    }catch(error){
        res.status(500).send();
    }
});

//Get All
router.get('/aircraft', async(req, res) => {

    try{
        const aircraft = await Aircraft.find();
        res.send(aircraft);

    }catch(error){
        res.status(500).send();
    }
})


// Get aircraft by Model
router.get('/aircraft/model/:id', async(req, res) => {
    const _id = req.params.id;

    try{
        const aircraft = await Aircraft.findOne({_id});
        if(!req.query.model){
            return res.status(404).send();
        }
         res.send(aircraft);
    }catch(error){
        res.status(500).send();
    }
});

//Delete Aircraft
router.delete('/aircraft/delete/:id', async(req, res) => {
    try{
        const aircraft = await Aircraft.findByIdAndDelete({_id: req.params.id});

        if(!aircraft){
            res.status(404).send();
        }
        res.send(aircraft);
    }catch(error){
        res.status(400).send();
    }
})

module.exports = router;