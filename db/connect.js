
const mongoose = require('mongoose')



const connectDB = (connectionString) => {
return mongoose
    .connect(connectionString, {
    useNewUrlParser : true, // All this object is tho remove the dprication errors at initializing;
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology : true
})
}



module.exports = connectDB;

