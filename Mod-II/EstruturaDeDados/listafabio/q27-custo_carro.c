/*O custo ao consumidor de um carro novo � a soma do custo de f�brica com a percentagem do distribuidor e
dos impostos (aplicados ao custo de f�brica). Supondo que a percentagem do distribuidor seja de 28% e os
impostos de 45%, escreva um programa que leia o custo de f�brica de um carro e escreva o custo ao
consumidor.*/

#include <stdio.h>

int main(){
	float custo_fabrica, custo_consumidor;
	
	printf("Custo de fabrica do carro: ");
	scanf("%f", &custo_fabrica);
	
	custo_consumidor = custo_fabrica + (custo_fabrica * 28 / 100) + (custo_fabrica * 45 / 100);
	
	printf("Pre�o final: R$%.2f", custo_consumidor);
	
	return 0;
}
