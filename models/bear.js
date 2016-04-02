var mongoose = require('mongoose');

var BearSchema = mongoose.Schema({
  name: String,
  species: String,
});

module.exports = mongoose.model('Bear', BearSchema);
