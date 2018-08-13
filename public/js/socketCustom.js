
let socket = io();

// ON es para eschuchar.      //EMMIT, es para emitir información

  socket.on('connect',function(){console.log('Conectado al servidor')})

  socket.on('disconnect',function(){console.log('Conexión con el servidor perdida')})

  socket.emit('enviarMensaje',{usuario:'Javier',
                                mensaje:'Hola Mundo'},function(respuesta){console.log('respuesta server:',respuesta)})
//Escuchar información.

  socket.on('enviarMensaje',function(mensaje){console.log('Servidor:',mensaje)})
