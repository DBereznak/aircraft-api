const mongoose = require('mongoose');
const validator = require('validator');

const aircraftSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        required: true,
        trim: true,
        maxlength: 36
    },
    model : {
        unique: true,
        type: String,
        required: true,
        trim: true,
        maxlength: 36
    },
    modelVariation: {
        type: String,
        required: false,
        trim: true,
        maxlength: 36
    },
    nationOrigin: {
        type: String,
        required: true, 
        trim: true,
        maxlength: 36
    },
    role: {
        type: String,
        required: true,
        trim: true,
        maxlength: 36
    },
    inService: {
        type: Boolean,
        required: false
    }, 
    yearsProduced: {
        type: String,
        required: true,
        trim: true,
        maxlength: 36
    }, 
    engineType: {
        type: String,
        required: true,
        trim: true,
        maxlength: 36
    }, 
    cost: {
        type: String,
        required: false,
        trim: true,
        maxlength: 36
    },
    wingspan: {
        type: String,
        required: true,
        trim: true,
        maxlength: 36
    },
    topSpeed: {
        type: String,
        required: true,
        trim: true,
        maxlength: 36
    },
    topAltitude: {
        type: String,
        required: false,
        trim: true,
        maxlength: 36
    }, 
    firstFlight: {
        type: Date,
        required: false,
        trim: true
    },
    imgUrl: {
        type: String,
        required: false,
        trim: true
    },
    additionalInfo: {
        type: String,
        required: false,
        trim: true,
    }
});

const Aircraft = mongoose.model('Aircraft', aircraftSchema);

module.exports = Aircraft;