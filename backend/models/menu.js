const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let menu = new Schema({
  item: {
    type: String
  },
  desc: {
    type: String
  },
  price: {
    type: Number
  },
  cuisine: {
    type: String
  }
}, {
  collection: 'menuitems'
})
module.exports = mongoose.model('menu', menu)
