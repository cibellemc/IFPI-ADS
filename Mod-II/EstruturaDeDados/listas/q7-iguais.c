# include "listaencadeada.h"

int iguais(Lista A, Lista B){

int tamA = tam(A);
int tamB = tam(B);

	if (tamA == tam(B)){ // se o "tamanho" for diferente já retorna falso
		while (A != NULL){ 
			if (!(A->item == B->item)){ // se for falso para
				return 0;
			}
		A = A->prox; // vai pro prox elemento
		B = B->prox;
		}
		return 1;		
	} else {
		return 0;
	}
}

main(){
	Lista i = no(3, no(3, NULL));
    Lista j = no(3, no(3, no(5, NULL)));
    Lista k = no(0, no(0, no(5, NULL)));
    Lista l = no(3, no(3, NULL));

    printf("Lista i: ");
    exibe(i);
    printf("\nLista j: ");
    exibe(j);
    printf("\nLista k: ");
    exibe(k);
    printf("\nLista l: ");
    exibe(l);

    printf("\n\niguais(i, j): %d", iguais(i, j));
    printf("\niguais(i, k): %d", iguais(i, k));
    printf("\niguais(i, l): %d", iguais(i, l));
	
}
