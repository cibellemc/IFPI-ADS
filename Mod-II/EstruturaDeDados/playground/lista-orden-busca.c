# include "../listas-ordenadas/lstord.h"

int main(void){
	Lista L = NULL;
	ins(2, &L);
	ins(5, &L);
	ins(2, &L);
	ins(4, &L);
	ins(3, &L);
	printf("Sequencia em ordem crescente sem repeticoes: ");
	exibe(L);
	puts("");
	printf(fmt, em(6, L));

	return 0;
}
