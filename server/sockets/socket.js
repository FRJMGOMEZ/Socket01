const {io} = require('../server');


io.on('connection',(client)=>{
  console.log('Usuario conectado')

  client.emit('enviarMensaje',{usuario:'ADMIN',
                               mensaje:'Bienvenido a mi web'})

  client.on('disconnect',()=>{console.log('Usuario desconectado')})

  //ESCUCHAR AL CLIENTE.

  client.on('enviarMensaje',(data,callback)=>{

    console.log(data);

    client.broadcast.emit('enviarMensaje',data);

  //if(mensaje.usuario){callback({ok:true,
                                //resuesta:'Todo salió bien'})}

  //else{callback({ok:true,
                //respuesta:'Todo salió mal'})}
  })
})
