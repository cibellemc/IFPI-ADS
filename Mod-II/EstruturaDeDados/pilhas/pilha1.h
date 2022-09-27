#include <stdio.h>
#include <stdlib.h>


typedef struct pilha{
	int max; //tamanho da pilha
	int topo; //�ltimo elemento colocado
	char *item; //vetor
	
}Pilha;

Pilha* pilha(int tamanho){ //inicializando a pilha
	Pilha *p = (Pilha*)malloc(sizeof(Pilha)); //alocando memoria pra pilha
	p->max = tamanho;
	p->topo = -1; 
	p->item = (char*)malloc(m*sizeof(char)); //alocando memoria pra item
	return p; //retorna endere�o da pilha
}

void push(Pilha *p, char valor){
	if (!pilhaCheia(p)){ //se a pilha n�o estiver cheia, aumento o topo e add um elemento nessa posi��o
		p->topo++;
		p->item[p->topo] = valor;
	} 		
}
		
char pop(Pilha *p){
	if (!pilhaVazia){ 
		char removido = p->item[getTopo(p)]; //armazena item a remover
		pilha->topo--; //decrementa o topo
		
		return removido;
	}
}

int pilhaVazia(Pilha *p){
	return getTopo(p) == -1; //verifica se n�o h� nenhum elemento
	}
		
int pilhaCheia(Pilha *p){
	return getTopo(p) == p-> max - 1; //verifica se h� elementos no tamanho m�x
}
		
void destroi(Pilha *p){
	free((p)->item);
	free(p);
	p = NULL;
	//free - programa ainda n�o terminou mas estou devolvendo a mem�ria, porem n�o "limpa" o que estava atribuido
}

int getTopo(Pilha *p){
	return p->topo; //a posi��o, n�o o valor
}
		
