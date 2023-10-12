const pegawaiModel = require('../models/PegawaiModel')

 async function getAll(req,res){
    try{
        const semuaPegawai = await pegawaiModel.getAll()
        res.json({data:semuaPegawai})
    }catch(error){
        console.error(error)
        res.json({error:error})

    }
}

module.exports = {getAll}