const express = require('express')
const app = express();
const port = process.env.port || 3001
const router = express.Router()

app.listen(port)

const pegawaiController = require('./controllers/PegawaiController')

app.get('/getDataEmployee', pegawaiController.getAll)

module.exports = router