//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

#include <stdio.h>

main(){
	float n1, peso1, n2, peso2, n3, peso3, media_pond;
	
	printf("Nota 1: ");
	scanf("%f", &n1);
	
	printf("Nota 2: ");
	scanf("%f", &n2);
	
	printf("Nota 3: ");
	scanf("%f", &n3);
	
	media_pond = (n1 * peso1 + n2 * peso2 + n3 * peso3)/(peso1 + peso2 + peso3);
	
	printf("Media ponderada: %.1f", media_pond);
	
}
