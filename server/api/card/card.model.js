'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({  
  title: {
    type: String,
    require: true
  },
  description: String,
  position: Number,
  list: {
    type: Schema.Types.ObjectId,
    ref: 'List',
    require: true
  }
});

module.exports = mongoose.model('Card', cardSchema);  