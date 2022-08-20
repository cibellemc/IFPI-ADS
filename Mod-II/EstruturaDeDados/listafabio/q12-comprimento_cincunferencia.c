//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * pi *r)

#include <stdio.h>
#define pi 3.14

int main(){
	float raio;
	
	printf("Raio da circunferencia: ");
	scanf("%f", &raio);
	
	printf("Comprimento: %.1f", 2 * raio * pi);
	
	return 0;
}
