# include "listaencadeada.h"

 int enesimo (int x, Lista A){
	int tamA = tam(A);
	int i = 0;
	for (i = 0; i < tamA; i++){
		if(i == x){
			return A->item;
		}
		A = A->prox;
	}
}

int main(){
	Lista j = no(3, no(3, no(5, NULL)));
	printf(fmt, enesimo(2, j));
	
	return 0;
}
