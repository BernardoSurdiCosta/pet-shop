const Sequelize = require("sequelize")

const User = require("./user.model")
const Animal = require("./animal.model")
const Service = require("./service.model")
const ServiceTypes = require("./serviceTypes.model")

const configuration = require("../utils/configuration")

const config = configuration()
const sequelize = new Sequelize(config.database)

const database = {
  Sequelize,
  sequelize,
  User: User(sequelize, Sequelize),
  Animal: Animal(sequelize, Sequelize),
  Service: Service(sequelize, Sequelize),
  ServiceTypes: ServiceTypes(sequelize, Sequelize),
}

module.exports = database
