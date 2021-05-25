// Luis Angel Gonzalez

const socket = io();

const username = prompt('Ingresa tu username:');
if (username == '') {
    const username = prompt('Ingresa tu username:');
}

const button = document.getElementById('btn-send');
const input = document.getElementById('input-message');
const msgbox = document.getElementById('msgbox')
const conexiones = document.getElementById('conexiones')

document.addEventListener('keypress', e => {
    if(e.key == 'Enter') {
        socket.emit('message', {
            username: username,
            message: input.value
        })
        input.value = ''
    }
})

button.addEventListener('click', () => {
    socket.emit('message', {
        username: username,
        message: input.value
    })
    input.value = ''
})

socket.on('message', data => {
    msgbox.innerHTML += `
    <div class="message">
        <h6><b>${data.username}</b></h6>
        <p>${data.message}</p>
    </div>
    `
})

socket.on('conexiones', data => {
    conexiones.innerHTML = `Conexiones: ${data.conexiones}`
})