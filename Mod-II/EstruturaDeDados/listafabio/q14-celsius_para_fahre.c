//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

#include <stdio.h>

int main(){
	float tcelsius;
	
	printf("Temperatura em graus Celsius: ");
	scanf("%f", &tcelsius);
	
	printf("Temperatura em Fahrenheit: %.1f", (9 * tcelsius + 160) / 5);
	
	return 0;
}
