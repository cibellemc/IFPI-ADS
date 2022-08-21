//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

#include <stdio.h>

int main(){
	int dias, anos, meses;
	
	printf("Idade (em dias): ");
	scanf("%d", &dias);
	
	anos =  dias / 365;
	meses = (dias % 365) / 30;
	dias = dias - (anos * 365 + meses * 30);
	
	printf("Voce ja viveu %d anos, %d meses e %d dias", anos, meses, dias);
	
	return 0;
}
