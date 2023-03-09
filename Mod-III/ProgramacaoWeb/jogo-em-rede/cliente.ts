import * as net from 'net';

const client: net.Socket = new net.Socket();

client.connect(3000, 'localhost', () => {
   console.log('Conectado ao servidor');
   client.write('Olá, eu sou o cliente');
});

client.on('data', (data: Buffer, username:string) => {
   console.log(`Mensagem do servidor: ${data.toString()}`);
   client.write(data)
   //client.end();
});

client.on('end', () => {
   console.log('Desconectado do servidor');
});