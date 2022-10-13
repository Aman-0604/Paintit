var express = require('express');
var cors=require('cors');// installed this because you can't call your api's from you web server
var http = require('http').createServer(express);
var io = require('socket.io')(http,  {cors: {origin: "*"}});

const app = express()
const port = 8000// bcoz at 3000 port our react app will work


app.use(cors());
// MiddleWare (if you want to use req.body)
app.use(express.json()); 


io.on('connection', (socket)=> {
      console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})

http.listen(port, () => {
   console.log(`paintit_backend is listening on port ${port}`)

})