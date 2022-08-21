//Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o
//no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

#include <stdio.h>

int main(){
	float preco_carteira, qtd_dinheiro, cigarros_dia, anos_fumando;
	
	printf("Ha quantos anos voce fuma? ");
	scanf("%f", &anos_fumando);
	
	printf("Quantos cigarros voce fuma por dia? ");
	scanf("%f", &cigarros_dia);
	
	printf("Quantos custa uma carteira de cigarros? ");
	scanf("%f", &preco_carteira);
	
	qtd_dinheiro = ((anos_fumando * 365 * cigarros_dia) / 20) * preco_carteira;
	
	printf("Em %.0f anos, voce ja gastou R$%.2f em cigarros.", anos_fumando, qtd_dinheiro);
	
	return 0;
}
