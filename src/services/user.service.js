const { PASSWORD } = require('../config/db.config')
const db = require('../models')
const User = db.users

exports.findAll = async () => {
 try{
    const users = await user.findAll({
        attributes:['id','username', 'email']
    })
    return users
 } catch(e){
    throw Error('Ocorreu um erro ao selecionar os usuários. Error: ' + e.message)
 }
}

exports.findById = async(id) => {
    try{
        const user = await User.findByPk(id, {
            attributes:['id','username', 'email']
        })
        return user
    } catch (e){
        throw Error('Ocorreu um erro ao selecionar o usuario. ERROR: ' + e.message)
    }
}
exports.create = async(username, email, password) => {
    try{
        const user = await User.create({username: username, email: email, password: password})
        return user
    }catch (e){
        throw Error('Erro ao inserir o usuario:  ' + username + ' ERROR:  ' + e.message)
    }
}
exports.update = async (id, username, email, password) => {
    try{
        await User.update(
            {username: username,email: email, password: password},
            {where:{id: id}})
    } catch (e){
        throw Error('Erro ao selecionar o usuario: ' + username + ' ERROR: ' + e.message)
    }
}
exports.delete = async (id) => {
    try {
        await User.destroy({
            where:{id: id}
        })
    } catch (e){
        throw Error('Ocorreu um erro ao deletar o usuario. ERROR: ' + e.message)
    }
}