#include "listaencadeada.h"

void substitui(int x, int y, Lista L) {
	int count = 0;
	
	while( L != NULL ) { // enquanto nao estiver vazia
		if(L->item == x ) { // se o valor passado for igual ao item corrente da lista
			L->item = y; // o valor corrente recebe x
		}
		L = L->prox; // proximo elemento
	}
}

int main() {
	Lista L = no(3, no(3, no(5, NULL)));
	
	substitui(3,4,L);
	exibe(L);
	
	return 0;
}

