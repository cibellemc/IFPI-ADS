#include "listaencadeada.h"

int ultimo(Lista L) {
    while( L != NULL ) {
        if ( L->prox == NULL ){ // se for o último item,
            printf(fmt, L->item);
        }
        L = L->prox;
    }
}

int main() {
	Lista L = no(7,no(9,no(2, NULL)));
	ultimo(L);
	
	return 0;
}