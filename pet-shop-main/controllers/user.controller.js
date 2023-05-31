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
            name: yup.string().min(3),
            date_nas: yup.date(),
            email: yup.string().email(),
            cpf: yup.string().min(11).max(11)       
        })

        const parsedUser = await createUserSchema
            .validate(request.body)
            .catch((error) => {
                response.statusCode = 400
                response.json(error)
            })

        if (!parsedUser) {
            return
        }

        response.json(user)

    }
}