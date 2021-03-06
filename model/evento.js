const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  Time: String,
  Procedura: String,
  CreatedOn: Date,
  Modified: Date,
  Disabled: Boolean,
});

module.exports = mongoose.model('Evento', eventoSchema);
