//importar depencencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


//iniciando express
const server = express()
server
.use(express.urlencoded({ extended: true }))
// utilizando os arquivos estáticos
.use(express.static('public'))
// configurar tamplete engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOphanage)
.post('/save-orphanage', pages.saveOrphanage)


//ligar um caminho
server.listen(5500)