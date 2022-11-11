# include "lstord.h"

void insSR(Item x, Lista *L){ // insere ordenado sem repeticoes
	while(*L != NULL && (*L)->item < x){
			L = &(*L)->prox;	
	} 
	if (em(x, *L) == 0) // 0 é falso
	*L = no(x, *L); // o conteudo so recebe um novo no se o x nao estiver na lista
}

int main(void){
	Lista L = NULL;
	insSR(2, &L);
	insSR(3, &L);
	insSR(2, &L);
	insSR(4, &L);
	insSR(3, &L);
	insSR(5, &L);
	printf("Sequencia em ordem crescente sem repeticoes: ");
	exibe(L);
	puts("");

	return 0;
}
