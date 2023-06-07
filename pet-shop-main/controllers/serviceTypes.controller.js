const yup = require("../utils/internationalization")
const { ServiceTypes } = require("../models")

module.exports = class ServiceTypesController {
  async getALL(request, response) {
    const serviceTypes = await ServiceTypes.findAll()

    response.json({
      serviceTypes,
    })
    
    }

    async create(request, response){
      const createServiceTypesSchema = yup.object({
        name: yup.string(),
        price: yup.number(),
        duration: yup.string(),       
    })
    console.log(request.body)
    const parsedServiceTypes = await createServiceTypesSchema
        .validate(request.body)
        .catch((error) => {
            response.statusCode = 400
            response.json(error)
        })

    if (!parsedServiceTypes) {
        return
    }
    
    const  serviceTypes = await ServiceTypes.create(parsedServiceTypes)
    
    response.json(serviceTypes)
    } 
}