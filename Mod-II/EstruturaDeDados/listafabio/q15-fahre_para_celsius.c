//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

#include <stdio.h>

int main(){
	float tfahre;
	
	printf("Temperatura em graus Fahrenheit: ");
	scanf("%f", &tfahre);
	
	printf("Temperatura em Celsius: %.1f", (5 * tfahre - 160) / 9);
	
	return 0;
}
