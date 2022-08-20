//Leia um valor em m, calcule e escreva o equivalente em cm.

#include <stdio.h>

int main(){
	float m;
	
	printf("Distancia em m: ");
	scanf("%f", &m);
	
	printf("Distancia em cm: %.1f", m * 100);
	
	return 0;
}
