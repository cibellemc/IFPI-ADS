# include "../listas/listaencadeada.h"

void ins(Item x, Lista *L){
	while(*L != NULL && (*L)->item < x){
		L = &(*L)->prox; 
	}
	*L = no(x, *L); 
}

void rem(Item x, Lista *L){
	while(*L != NULL && (*L)->item < x){
		if(*L == NULL || (*L)->item > x){
			return;
		}
	}
	Lista n = *L;
	*L = n->prox;
	free(n);
}

int em(Item x, Lista L){
	while(L != NULL && (L)->item < x){
		L = L->prox;
	}
	return (L != NULL || L->item == x);
}
