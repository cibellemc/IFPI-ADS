//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

#include <stdio.h>

int main(){
	int m, anos, meses;
	
	printf("Numero de meses: ");
	scanf("%d", &m);
	
	// 1 semana = 168 horas
	anos = m / 12;
	meses = m % 12;
	
	printf("%d meses correspondem a %d ano(s) e %d mese(s)", m, anos, meses);
	
	return 0;
}
