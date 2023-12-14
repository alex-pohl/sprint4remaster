const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config();

//Middleware -> 
app.use(express.json());

app.use('/api/v1/tasks', tasks)



const port = 5000;

const start = async () =>{ // We only listen to the port IF we succesfully connect to the DB.
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Database connection ✅')
        app.listen(port,()=>console.log(`Listening on port ${port}...`))
    } catch (error) {
        console.log(error) 
    }
}
start()

