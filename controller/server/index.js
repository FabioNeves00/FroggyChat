const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();

const {addUser, removeUser, getUser, getUsersInRoom} = require('../middlewares/users.js')
const router = require('../middlewares/router.js');

const PORT = process.env.PORT || 5000;

app.use(router)
app.use(require('cors')())


const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    socket.on('join', ({ nome, sala }, callback) => {
        const { error, user } = addUser({id: socket.id, nome, sala})
        console.log('User Connected')

        if(error) return callback(error)
        socket.join(user.sala)
        socket.emit('mensagem', {user: 'admin', text: `Olá ${user.nome}, bem-vindo à sala: ${user.sala}!`})
        
        socket.broadcast.to(user.sala).emit('mensagem', {user: 'admin', text:`${user.nome} entrou.`})

        socket.join(user.sala)
        callback()
    })

    socket.on('enviarMsg', (mensagem, callback) => {
        const user = getUser(socket.id)

        io.to(user.sala).emit('mensagem', {user: user.nome, text: mensagem})
        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        console.log('User Disconnected')
        if (user) {
            io.to(user.sala).emit('mensagem', {user: 'admin', text: `${user.nome} saiu do chat.`})
        }
    })
})


server.listen((PORT), () => console.log(`Server running on port: ${PORT}`))