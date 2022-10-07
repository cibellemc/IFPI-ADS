#include "./pilha1.h"

int main() {
    int tam;
    float item;
    float aux;

    printf("Qtd de numeros: ");
    scanf("%d", &tam);

    Pilha * pilhaB = pilha(tam);
    Pilha * pilhaA = pilha(tam);

    printf("Itens: ");
   
	preencherPilha(pilhaA);

    mostraPilha(pilhaA);

   printf(pop(pilhaA));
   
   
	return 0;
}
