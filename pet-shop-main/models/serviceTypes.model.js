module.exports = (sequelize, Sequelize) => {
    const serviceTypes = sequelize.define("servicesTypes", {
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      duration: {
        type: Sequelize.STRING,
      },
    })
  
    return serviceTypes
  }