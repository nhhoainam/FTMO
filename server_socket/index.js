const express = require('express')
const http = require('http')
const cors = require('cors')
const io = require('socket.io')
const configValues = require('./utils/config')
const { MessageServices } = require('./services/message.services')

const app = express()


app.use(cors({
    credentials: true,
    origin: '*'
}))

const server = http.createServer(app)

require('./databases/mongodb')

app.get('/messages',async (req, res, next) => {
    const {page, limit} = req.query;
    const skip = (page - 1) * limit;
    return res.status(200).json({data: await MessageServices.findAll(skip, limit)})
})

app.get('/messages/delete-all', async (req, res, next) => {
    await MessageServices.deleteAll();
    return res.status(200).json({message: 'All messages deleted'})
})

app.use((error, req, res, next) => {
    return res.status(500).json({error: error.message})
})

const ioServer = io(server)


ioServer.use((socket, next) => {
    const token = socket.handshake.headers?.authorization;
    if (!token || token !== configValues.token) {
        socket.disconnect(true);
        return;
    }

    next();
});

ioServer.on('connection', 
    (socket) => {
        console.log('A user connected')

        socket.on('send-message', async (msg) => {
            try {
                await MessageServices.create(msg);
                ioServer.emit('receive-message', await MessageServices.findAll());
            } catch (error) {
                console.log(error.message)
            }
        })

        socket.on('disconnect', () => {
            console.log('A user disconnected')
        })

    }
)

server.listen(8080, () => {
        console.log('Server is running on port 8080')
    }
)