const yup = require("../utils/internationalization")
const { Animal } = require("../models")

module.exports = class AnimalController{
  async getALL(request, response) {
    const animals = await Animal.findAll()

    response.json({
        animals,
    })
}

    async create(request, response){
      const createAnimalSchema = yup.object({
        name: yup.string(),
        breed: yup.string(),
        age: yup.number().integer(),
        weigth: yup.number(),
        owner_name: yup.string(),
        id_vacinated: yup.string(),       
    })
    console.log(request.body)
    const parsedAnimal = await createAnimalSchema
        .validate(request.body)
        .catch((error) => {
            response.statusCode = 400
            response.json(error)
        })

    if (!parsedAnimal) {
        return
    }
    
    const  animal = await Animal.create(parsedAnimal)
    
    response.json(animal)
    }

    async delete(request, response) {
        if(!request.params.id){
            request.status(400).send({ message:"É necessário um id para deletar um animal"})
            return
        }

        Animal.destroy({ where: {id: request.params.id}})
            .then((data) => {
                response.send({ deleteAnimalsCount: data})
            })
            .catch((erro) => {
                response.status(500).send({
                    message: erro.message || "Ocorreu erro ao tentar deletar o usuario"
                })
            })
    }   
}