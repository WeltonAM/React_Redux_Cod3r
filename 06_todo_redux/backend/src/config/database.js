const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.set('strictQuery', false)
module.exports = mongoose.connect(process.env.MONGO_DB_URL)