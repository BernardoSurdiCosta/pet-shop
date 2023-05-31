const express = require("express")
const UserController = require("./controllers/user.controller")
const AnimalController = require("./controllers/animals.controller")
const ServiceController = require("./controllers/service.controller")
const ServiceTypesController = require("./controllers/serviceTypes.controller")



const userController = new UserController()
const animalController = new AnimalController()
const serviceController = new ServiceController()
const serviceTypesController = new ServiceTypesController()

const app = express()


app.use(express.json())
app.use("/home", express.static("./index.html"))
app.use("/index.css", express.static('./index.css'))
app.use("/script.js", express.static("./script.js"))

app.use("/serviceTypes", express.static('./serviceTypes.html'))
app.use("/index.css", express.static('./index.css'))
app.use("/serviceTypes.js", express.static('./serviceTypes.js'))

app.use("/animals", express.static('./animals.html'))
app.use("/index.css", express.static('./index.css'))
app.use("/animals.js", express.static('./animals.js'))

app.use("/services", express.static('./services.html'))
app.use("/index.css", express.static('./index.css'))
app.use("/services.js", express.static('./services.js'))




app.get('/api/user',userController.getALL)
app.post('/api/user',userController.create)

/*app.get('/api/servicetypes',animalController.getAll)
app.post('/api/servicetypes',animalController.create)

app.get('/api/animals',serviceController.getALL)
app.post('/api/animals',serviceController.create)

app.get('/api/services',serviceTypesController.getALL)
app.post('/api/services',serviceTypesController.create)*/

app.listen(3000, () => {
    console.log(`Servidor está rodando em http://localhost:3000`)
})