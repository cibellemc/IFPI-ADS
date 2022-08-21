/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um programa que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo
usuário.*/

#include <stdio.h>

int main(){
	float qtd_latao, qtd_cobre, qtd_zinco;
	
	printf("Quantidade de latao (em kg): ");
	scanf("%f", &qtd_latao);
	
	qtd_cobre = qtd_latao * 70 / 100;
	qtd_zinco = qtd_latao - qtd_cobre;
	
	printf("%.1f kg de latao sao compostos por %.1f kg de cobre e %.1f de zinco", qtd_latao, qtd_cobre, qtd_zinco);
	
	return 0;
}
