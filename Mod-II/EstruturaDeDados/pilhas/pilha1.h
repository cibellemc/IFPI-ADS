#include <stdio.h>
#include <stdlib.h>


typedef struct pilha{
	int max; //tamanho da pilha
	int topo; //�ltimo elemento colocado
	int *item; //vetor
	
}Pilha;

Pilha* pilha(int tamanho){ //inicializando a pilha
	Pilha *p = (Pilha*)malloc(sizeof(Pilha)); //alocando memoria pra pilha
	p->max = tamanho;
	p->topo = -1; 
	p->item = (int*)malloc(tamanho*sizeof(int)); //alocando memoria pra item
	return p; //retorna endere�o da pilha
}

int getTopo(Pilha *p){
	return p->topo; //a posi��o, n�o o valor
}

int pilhaVazia(Pilha *p){
	return getTopo(p) == -1; //verifica se n�o h� nenhum elemento
}
		
int pilhaCheia(Pilha *p){
	return getTopo(p) == p-> max - 1; //verifica se h� elementos no tamanho m�x
}

void push(int valor, Pilha *p){
	if (!pilhaCheia(p)){ //se a pilha n�o estiver cheia, aumento o topo e add um elemento nessa posi��o
		p->topo++;
		p->item[p->topo] = valor;
	} 		
}

void preencherPilha(Pilha *p){
	int i; float item;
    for(i = 0; i < p->max; i++) {
        scanf("%f", &item);
        push(item, p);
    }
}
		
int pop(Pilha *p){
	if (!pilhaVazia(p)){ 
		int removido = p->item[getTopo(p)]; //armazena item a remover
		p->topo--; //decrementa o topo
		
		return removido;
	}
}
		
void destroi(Pilha *p){
	free((p)->item);
	free(p);
	p = NULL;
	//free - programa ainda n�o terminou mas estou devolvendo a mem�ria, porem n�o "limpa" o que estava atribuido
}
		
Pilha * mostraPilha(Pilha *p){
	int i;
    for (i = 0; i < p->max; i++) {
        printf("%d", (p->item[i]));
    }
    return p;
}
