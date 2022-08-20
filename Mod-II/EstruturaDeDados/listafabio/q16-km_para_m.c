//Leia um valor em km, calcule e escreva o equivalente em m.

#include <stdio.h>

int main(){
	float km;
	
	printf("Distancia em km: ");
	scanf("%f", &km);
	
	printf("Distancia em m: %.1f", km * 1000);
	
	return 0;
}
