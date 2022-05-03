const express = require('express')
const res = require('express/lib/response')
const mongoose = require ('mongoose')
const app = express()

//forma de ler JSON/ middlewares
app.use (

    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas daAPI

const feedbackRoutes = require('./routes/feedbackRoutes')

app.use('/feedback', feedbackRoutes)
 
//rota inicial / endpoint
app.get('/', (req, res) => {

    res.json({ message: 'Oi express'})
})

mongoose
// entregar uma porta
.connect('mongodb+srv://jvelloso:jessica19@apicluster.58lql.mongodb.net/bancodaapi?retryWrites=true&w=majority')

.then(() => {
    console.log('Conectamos ao MongoDB')
    app.listen(3000)
})
.catch((err) => console.log('erro'))



