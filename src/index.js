//David Elizondo

//  Express es modulo que nos permite levanar un servidor HTTP de manera sencilla
const express = require('express');
const path = require('path')
const app = express();

const socketManager = require('./Sockets');

app.use(
    express.static(path.join(__dirname, '../public'))
);

const server = app.listen(process.env.PORT || 4000, () => {
    console.log('[+] Servidor online');
});

socketManager(server)