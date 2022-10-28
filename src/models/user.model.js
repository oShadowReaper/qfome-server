module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$/,
        },
        email:{
            type: Sequelize.STRING,
            notNull: true,
            is:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            unique:true
        },
        password: {
            type: Sequelize.STRING,
            notNull:true,
            is:/^(?=.*[0-9])(?=.*[a-z]).{8,}$/

        }
    },
    {
        timestamps: false,
    }   

)
    return User
}