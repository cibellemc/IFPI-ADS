/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e
dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os
impostos de 45%, escreva um programa que leia o custo de fábrica de um carro e escreva o custo ao
consumidor.*/

#include <stdio.h>

int main(){
	float custo_fabrica, custo_consumidor;
	
	printf("Custo de fabrica do carro: ");
	scanf("%f", &custo_fabrica);
	
	custo_consumidor = custo_fabrica + (custo_fabrica * 28 / 100) + (custo_fabrica * 45 / 100);
	
	printf("Preço final: R$%.2f", custo_consumidor);
	
	return 0;
}
