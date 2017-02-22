/* created by kartikkhurana

*/
let mongoose = require('mongoose');

// create player schema 
var playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'firstName is required'
    },
    lastName: {
        type: String,
        required: 'lastName is required'
    },
    Number: {
        type: int,
    },
  
});