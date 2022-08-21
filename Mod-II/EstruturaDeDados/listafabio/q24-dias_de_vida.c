//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas emdias.

#include <stdio.h>

int main(){
	int anos, meses, dias;
	
	printf("Idade (anos completos): ");
	scanf("%d", &anos);
	
	printf("Idade (meses): ");
	scanf("%d", &meses);
	
	printf("Idade (dias): ");
	scanf("%d", &dias);
	
	dias = anos * 365 + meses * 30 + dias;
	
	printf("Voce ja viveu %d dias", dias);
	return 0;
}
