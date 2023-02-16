const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.set('strictQuery', false)
module.exports = mongoose.connect(process.env.APP_DB, { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."

mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."