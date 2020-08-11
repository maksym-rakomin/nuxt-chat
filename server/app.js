const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const m = (name, text, id) => ({name, text, id});

io.on('connection', socket => {
  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      return cb('Данные не корректны');
    };

    socket.join(data.room)

    cb({userId: socket.id});
    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}`));
    socket.emit('newMessage', m('test', `Добро пожаловать sdsssssssssss ssssssssss ssssssss sssssssdsssssssssss ssssssssss ssssssss sssssssdsssssssssss ssssssssss ssssssss sssssssdsssssssssss ssssssssss ssssssss sssssssdsssssssssss ssssssssss ssssssss ssssssss s  s${data.name}`));
    socket.broadcast.to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} теперь в чате.`))
  })

  socket.on('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + ' SERVER'
      })
    }, 500)
  })
})

module.exports = {
  app,
  server
}
