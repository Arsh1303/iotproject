const mongoose = require('mongoose');

module.exports = mongoose.model('Sensor', new mongoose.Schema({
    DataValue: String,
    Data: String
}, { collection: 'value' }));