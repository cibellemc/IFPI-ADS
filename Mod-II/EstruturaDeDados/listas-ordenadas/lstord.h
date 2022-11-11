# include "../listas/listaencadeada.h"

void ins(Item x, Lista *L){ // insere ordenado
	while(*L != NULL && (*L)->item < x){
		L = &(*L)->prox; 
	}
	*L = no(x, *L); 
}

void rem(Item x, Lista *L){ // remove o valor
	while(*L != NULL && (*L)->item < x){
		if(*L == NULL || (*L)->item > x){ // se for maior que o valor, não pertence a lista
			return;
		}
	}
	Lista n = *L;
	*L = n->prox;
	free(n);
}

int em(Item x, Lista L){ 
	while(L != NULL && L->item < x){
		L = L->prox;
	}
	return (L != NULL && L->item == x);
}
