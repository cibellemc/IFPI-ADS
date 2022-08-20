//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

#include <stdio.h>

int main(){
	float base;
	
	printf("Lado do quadrado: ");
	scanf("%f", &base);
	
	printf("Area: %.1f", base * base);
	
	return 0;
}
