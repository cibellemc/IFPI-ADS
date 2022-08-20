//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

#include <stdio.h>

main(){
	float salario, novo_salario;
	
	printf("Informe seu salário atual: R$");
	scanf("%f", &salario);
	
	novo_salario = salario + (0.25 * salario);
	
	//para imprimir % foi necessário colocar 2, caso contrario era entendido como formatacao
	printf("Seu novo salario, com 25%% de aumento, eh de R$%.2f", novo_salario);
}
