const db = require('../config/database')

async function getAll(){
    const connection = await db.getConnection();
    try{
       
        const [rows, fields] = await connection.execute('select * from employees')
        return rows;
    }catch(error){
        console.error(error)
    } finally{
        connection.release()
    }
}
module.exports = {getAll}