//Leia o valor do d�lar e um valor em d�lar, calcule e escreva o equivalente em real (R$).

#include <stdio.h>

main(){
	float dolar_atual, valor_dolar, valor_real;
	
	printf("Informe o valor atual do dolar: $");
	scanf("%f", &dolar_atual);
	
	printf("Valor para conversao: $");
	scanf("%f", &valor_dolar);
	
	valor_real = valor_dolar * dolar_atual;
	
	printf("$%.2f correspondem a R$%.2f", valor_dolar, valor_real);
}
