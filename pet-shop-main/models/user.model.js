module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
      name: {
        type: Sequelize.STRING,
      },
      date_nas: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
    })
  
    return user
  }
  