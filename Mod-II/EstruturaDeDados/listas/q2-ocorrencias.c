#include "listaencadeada.h"

int ocorrencias(int x, Lista L) {
	int count = 0;
	
	while( L != NULL ) { // enquanto nao estiver vazia
		if(x == L->item ) { // se o valor passado for igual ao item corrente da lista
			count ++;
		}
		L = L->prox; // proximo elemento
	}
	
	return count;
}

int main() {
	Lista L = no(3, no(3, no(5, NULL)));
	
	printf(fmt, ocorrencias(3,L));
	
	return 0;
}


