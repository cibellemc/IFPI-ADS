//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g(grama).

#include <stdio.h>

int main(){
	float kg;
	
	printf("Massa em kg: ");
	scanf("%f", &kg);
	
	printf("Massa em g: %.1f", kg * 1000);
	
	return 0;
}
