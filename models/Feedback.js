//Criei esta entidade, afim de manusear os campos do feedback que serão inseridos pelos usuarios do aplicativo.

const mongoose = require('mongoose')

const Feedback = mongoose.model('Feedback', {
    atendimento:String,
    plataforma: String,
    performace: String,
})

//Será exportato para o banco de dados
module.exports = Feedback
