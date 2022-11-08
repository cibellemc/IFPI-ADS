#include "listaencadeada.h"

int soma(Lista L) {
	int soma = 0;
	
	while( L != NULL ) { // enquanto nao estiver vazia soma-se o elemento corrente
		soma += L->item;
		L = L->prox; // proximo elemento
	}
	
	return soma;
}

int main() {
	Lista L = no(7, no(3, no(12, NULL)));
	
	printf(fmt, soma(L));
	
	return 0;
}


