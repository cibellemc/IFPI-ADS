//Leia o valor da base e altura de um ret�ngulo, calcule e escreva sua �rea. (�rea = base * altura)

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
