const yup = require("../utils/internationalization")
const { User } = require("../models")

module.exports = class UserController {
    async getALL(request, response) {
        const user = await User.findAll()

        response.json({
            user,
        })
    }

    async create(request, response) {
        const createUserSchema = yup.object({
            name: yup.string(),
            date_nas: yup.string(),
            email: yup.string(),
            cpf: yup.string()       
        })
        console.log(request.body)
        const parsedUser = await createUserSchema
            .validate(request.body)
            .catch((error) => {
                response.statusCode = 400
                response.json(error)
            })

        if (!parsedUser) {
            return
        }
        
        const  user = await User.create(parsedUser)
        
        response.json(user)
    }
}