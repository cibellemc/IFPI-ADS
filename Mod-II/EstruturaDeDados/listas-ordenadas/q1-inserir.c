# include "lstord.h"

int main(void){
	Lista L = NULL;
	ins(2, &L);
	ins(5, &L);
	ins(1, &L);
	ins(4, &L);
	ins(3, &L);
	printf("Sequencia em ordem crescente:");
	exibe(L);
	puts("");
	return 0;
}
