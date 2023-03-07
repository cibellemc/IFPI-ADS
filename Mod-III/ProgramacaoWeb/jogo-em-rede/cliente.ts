import * as net from 'net';
const readline = require('readline')

// aparece no terminal do cliente
const client: net.Socket = new net.Socket();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.connect(3000, 'localhost', () => {
   console.log('Conectado ao servidor');
   rl.addListener("line", (line: string | Uint8Array) => {
       client.write(line) // escreve para servidor
   })
   
});

/*client.on('data', (data: Buffer) => {
   console.log(`Mensagem do servidor: ${data.toString()}`);
   client.write('Vou desconectar');
   client.end();
});*/

client.on('end', () => {
   console.log('Desconectado do servidor');
});