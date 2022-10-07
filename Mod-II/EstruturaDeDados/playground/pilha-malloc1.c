#include <stdio.h>
#include<stdlib.h>

int main(){
	int *p;
	p = (int *) malloc (5*sizeof(int));
	if (p== NULL){ //quando nao ha memoria suficiente malloc() retorna null
		printf("Erro! Sem memoria!\n");
		exit(1); //abortar
	}
	int i;
	for (i = 0; i < 5; i++){
		printf("Digite p[%d]",i);
		scanf("%d", &p[i]);
	}
	free(p);
	return 0;
}
