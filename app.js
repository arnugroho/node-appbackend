const express = require('express');
// const res = require('express/lib/response');
const app = express();
const port = process.env.port || 3001
const db = require('./config/database')


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

app.get('/hello', (req, res)=>{
    res.send('Hello, Express!')
})


app.get('/api/hello', (req, res)=>{
    res.json([{nama:"akbar"},{nama:"arief"}])
})

app.get('/api/employees',async(req,res)=>{
    try{
        const connection = await db.getConnection();
        const [rows, fields] = await connection.execute('select * from employees')
        connection.release()
        res.status(200).json({data:rows})
    }catch(error){
        console.error(error)
        res.status(500).json({error:error})

    }
})