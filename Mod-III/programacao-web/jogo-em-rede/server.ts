import * as net from 'net';
const input = require('prompt-sync')()
// import { v4 as uuidv4 } from 'uuid';
let count: number = 0

const server: net.Server = net.createServer()

interface Jogador {
  id: number;
  socket: net.Socket;
  nickname?: string;
}
 
 interface Mensagem {
   de: string;
   conteudo: string;
 }
 
 const enviarMensagem = (mensagem: Mensagem, remetenteId: number) => {
   const conteudo = `${mensagem.de}: ${mensagem.conteudo}\n`;
   jogadores.forEach((jogador) => {
     if (jogador.id !== remetenteId) {
       jogador.socket.write(conteudo);
     }
   });
 };

const jogadores: Map<number, Jogador> = new Map();

server.on('connection', socket => {  
  const playerId = count++;
  const jogador: Jogador = { id: playerId, socket: socket };
  jogadores.set(playerId, jogador);

   console.log(`Cliente conectado: ${playerId}:${socket.remoteAddress}`); // escreve para o server
   jogador.socket.write('Bem-vindo! Por favor, insira um nickname: ');
   // data event
   socket.on('data', data => {
      const message = data.toString().trim();
      console.log(`Mensagem recebida do jogador ${playerId}: ${message}`);

      // Se o jogador não tiver um nickname, armazene a mensagem como o apelido do jogador
      /*if (message === 'sair' || message === 'quit') {
        console.log(`Jogador desconectado: ${playerId}`);
        socket.end(); // desconecta o cliente do socket
      }
      } else {*/

        if (!jogador.nickname) {
          jogador.nickname = message;
          console.log(`Jogador ${playerId} é agora conhecido como ${jogador.nickname}`);
          jogador.socket.write(`Bem-vindo, ${jogador.nickname}!\n`);
        } else {
          const conteudo = `${jogador.nickname}: ${message}\n`;
          // const mensagem: Mensagem = JSON.parse(conteudo);
          enviarMensagem((conteudo), playerId);
        }
        // Código para processar a mensagem recebida do jogador

      
  
    });
    
   // emite o fim do evento
   socket.on('end', () => {
      console.log(`Jogador desconectado: ${playerId}`);
      jogadores.delete(playerId);
   });
    
   });

   

server.listen(3000, () => {
   console.log('Servidor inicializado na porta 3000'); // escutar página - 1ª mensagem
});