//Leia o valor da base e altura de um tri�ngulo, calcule e escreva sua �rea. (�rea=(base * altura)/2)

#include <stdio.h>

int main(){
	float base, altura;
	
	printf("Base do triangulo: ");
	scanf("%f", &base);
	
	printf("Altura do triangulo: ");
	scanf("%f", &altura);
	
	printf("Area: %.1f", (base * altura) / 2);
	
	return 0;
}
