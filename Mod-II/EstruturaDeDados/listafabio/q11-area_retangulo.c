//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

#include <stdio.h>

int main(){
	float base, altura;
	
	printf("Base do retangulo: ");
	scanf("%f", &base);
	
	printf("Altura do retangulo: ");
	scanf("%f", &altura);
	
	printf("Area: %.1f", (base * altura));
	
	return 0;
}
