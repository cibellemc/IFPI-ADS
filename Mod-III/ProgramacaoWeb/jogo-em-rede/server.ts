import * as net from 'net';

// aparece no terminal do servidor
const server: net.Server = net.createServer((socket: net.Socket) => {
   console.log(`Cliente conectado: ${socket.remoteAddress}:${socket.remotePort}`);
   socket.write('Olá, cliente!\n'); // escreve para cliente
   
   socket.on('data', data => {
        const str = data.toString()
        if(str === 'end'){
            socket.end()
        }
       console.log(str);
    });
    
    socket.on('end', () => {
       console.log('Cliente desconectado');
    });
    
});

server.listen(3000, () => {
   console.log('Servidor inicializado na porta 3000'); // escutar página - 1ª mensagem
});