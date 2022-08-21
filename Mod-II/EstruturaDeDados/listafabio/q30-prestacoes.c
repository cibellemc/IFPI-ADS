/*Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a cada
uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o valor da
mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da mercadoria for
R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00. Escreva um programa que
receba o valor da mercadoria e escreva o valor da entrada e das duas prestações, conforme as regras acima.*/

#include <stdio.h>

int main(){
	int valor_mercadoria, entrada, prestacoes;
	
	printf("Valor da mercadoria: R$");
	scanf("%d", &valor_mercadoria);
	
	entrada = valor_mercadoria / 3 + valor_mercadoria % 3;
	prestacoes = (valor_mercadoria - entrada) / 2;
	
	printf("Entrada: R$%d\n", entrada);
	printf("Demais prestacoes: R$%d", prestacoes);
	
	return 0;
}
