const express = require('express');
const app = express();
const tasks = require('./routes/tasks')




//Example route
app.get('/',(req,res)=>{
    res.send('Hello Wor..APP!')
})

app.use('/api/v1/tasks', tasks)

//routes
// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks:id')      - get a single task
// app.patch('/api/v1/tasks:id')    - modify a task
// app.delete('/api/v1/tasks:id')   - delete a task


const port = 5000;
app.listen(port,()=>console.log(`Listening to port ${port}`))
