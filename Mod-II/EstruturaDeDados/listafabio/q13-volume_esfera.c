//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * pi * r3) / 3) (pi = 3,14)

#include <stdio.h>
#define pi 3.14

int main(){
	float raio;
	
	printf("Raio da circunferencia: ");
	scanf("%f", &raio);
	
	printf("Comprimento: %.1f", (12 * raio * pi) / 3);
	
	return 0;
}
