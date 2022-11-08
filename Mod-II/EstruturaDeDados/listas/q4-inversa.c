#include "listaencadeada.h"

void inversa(Lista L) {
	if( L == NULL ) return;
	inversa(L->prox);
	printf(fmt, L->item);
}

int main() {
	Lista L = no(7,no(9,no(2, NULL)));
	inversa(L);
	
	return 0;
}