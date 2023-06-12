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
app.use("/index.css", express.static('./CSS/index.css'))
app.use("/script.js", express.static("./script.js"))

app.use("/serviceTypes", express.static('./HTML/serviceTypes.html'))
app.use("/serviceTypes.js", express.static('./JS/serviceTypes.js'))

app.use("/animals", express.static('./HTML/animals.html'))
app.use("/animals.js", express.static('./JS/animals.js'))

app.use("/services", express.static('./HTML/services.html'))
app.use("/services.js", express.static('./JS/services.js'))

app.get('/api/user',userController.getALL)
app.post('/api/user',userController.create)
app.delete('/api/user/:id',userController.delete)


app.get('/api/animals',animalController.getALL)
app.post('/api/animals',animalController.create)
app.delete('/api/animals/:id',animalController.delete)

app.get('/api/servicetypes',serviceTypesController.getALL)
app.post('/api/servicetypes',serviceTypesController.create)
app.delete('/api/servicetypes/:id', serviceTypesController.delete)

/* app.get('/api/servicetypes',animalController.getAll)
app.post('/api/servicetypes',animalController.create) */
 
app.listen(3000, () => {
    console.log(`Servidor está rodando em http://localhost:3000`)
})