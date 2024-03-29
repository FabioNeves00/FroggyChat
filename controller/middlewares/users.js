let users = []

const addUser = ({ id, nome, sala }) => {
    nome = nome.trim().toLowerCase()
    sala = sala.trim().toLowerCase()

    const existUser = users.find((user) => user.sala === sala && user.nome === nome)
    if(existUser) return {error: 'Nome já está sendo usado'}
    const user = {id, nome, sala}
    users.push(user)

    return {user}
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)
  const user = users[index]
  users.splice(index, 1)
  return user
}

const getUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom = (sala) => users.filter((user) => user.sala === sala)

module.exports = {addUser, removeUser, getUser, getUsersInRoom}