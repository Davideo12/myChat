//  David Elizondo

const sio = require('socket.io');

let conn_count = 0;

function socketManager(server) {
    io = sio(server);

    io.on("connection", client => {
        conn_count++;

        io.emit('conexiones', {conexiones: conn_count});

        client.on('message', data => {
            console.log(data)
            io.emit('message', data);
        });

        client.on("disconnect", () => {
            conn_count--;
        })
    });
}

module.exports = socketManager