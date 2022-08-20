//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

#include <stdio.h>

int main(){
	int m, km, m_resto;
	
	printf("Distancia em m: ");
	scanf("%d", &m);
	
	km = m / 1000;
	m_resto = m % 1000;
	
	printf("Distancia em km: %d,%d", km, m_resto);
	
	return 0;
}
