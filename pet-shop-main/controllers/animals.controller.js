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
}