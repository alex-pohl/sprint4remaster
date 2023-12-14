const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{ // Validators
        type:String,
        required:[true,'must provide a name'],
        trim: true, // Remove blank spaces from before and after the string.
        maxlength:[20, 'name can only be 20 or fewer characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema)