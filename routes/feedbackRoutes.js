const router = require('express').Router()

const res = require('express/lib/response')
const Feedback = require('../models/Feedback')

//criação de dados
router.post('/', async (req, res) => {
  
    // red.body
    const { atendimento, plataforma, performace } = req.body

    if(!atendimento){
        res.status(422).json({error: "Por favor preencha todos os campos"})
    }      
 
    const feedback = {
        atendimento,
        plataforma,
        performace,

    }

    // função inserida para resgatar os possiveis erros na requisição.
    try {

        //criando dados
        await Feedback.create(feedback)

        res.status(201).json({message: 'Seu feedback contribui muito! Obrigado por ter dedicado um pouco do seu tempo para nos ajudar'})
        
    } catch (error) {
        res.status(5000).json({error: error})
    }

})

//leitura de dados
router.get('/', async (req,res) => {
    try{

        const feedbacks = await Feedback.find()

        res.status(200).json(feedbacks)
    } catch (error){
        res.status(5000).json({error: error})
    }
})

//Deletar comentário:

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const feedback = await Feedback.findOne({_id: id })

        if (!feedback){
            res.status(422).json({message: 'O comentário não foi encntrado.'})
            return
        }

        try {
            await Feedback.deleteOne({_id: id})

            res.status(200).json({message:'Seu comentário foi excluído.'})
            
        } catch (error) {
            res.status(500).json({error: error})
        }
}) 


module.exports = router