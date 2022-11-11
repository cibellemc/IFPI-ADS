# include "lstord.h"

void decrescente(Item x, Lista *L){ // insere ordenado decrescente
	while(*L != NULL && (*L)->item > x){
		L = &(*L)->prox; 
	}
	*L = no(x, *L); 
}

int main(){
	Lista N = NULL;
	decrescente(7, &N);
	decrescente(5, &N);
	decrescente(3, &N);
	decrescente(1, &N);
	decrescente(10, &N);
	printf("Sequencia em ordem decrescente: ");
	exibe(N);
	puts("");
	
	return 0;
}	

