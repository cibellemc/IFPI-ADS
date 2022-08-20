//Leia um valor em real (R$), calcule e escreva 70% deste valor.

#include <stdio.h>

main(){
	float valor;
	
	printf("Valor: R$");
	scanf("%f", &valor);
	
	printf("70%% de R$%.2f = R$%.2f", valor, valor*70/100);
}
