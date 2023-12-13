const express = require('express');
const app = express();
const tasks = require('./routes/tasks')



//Middleware -> 
app.use(express.json());

//Example route
app.get('/',(req,res)=>{
    res.send('Hello Wor..APP!')
})

app.use('/api/v1/tasks', tasks)



const port = 5000;
app.listen(port,()=>console.log(`Listening to port ${port}`))
