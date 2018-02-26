'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
    require: true
  }]

});

module.exports = mongoose.model('List', listSchema);