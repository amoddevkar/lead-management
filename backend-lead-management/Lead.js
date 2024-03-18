const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        //enum: ['SIM', 'JioFiber', 'AirFiber', 'JioPhone', 'JioFi', 'JioBook', 'JioBharat'],
        required: true
    },
    preferredDate: {
        type: Date,
        required: true
    },
    preferredTimeSlot: {
        type: String,
        required: true
    }
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
