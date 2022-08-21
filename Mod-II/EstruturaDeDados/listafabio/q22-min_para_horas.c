//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

#include <stdio.h>

int main(){
	int min, dias, horas, minutos;
	
	printf("Numero de minutos: ");
	scanf("%d", &min);
	
	// 1 dia tem 1440 minutox
	dias = min / 1440;
	horas = (min % 1440) / 60;
	minutos = min - (horas * 60 + dias * 1440);
	
	
	printf("%d minutos correspodem a %d dias %d horas e %d minutos.", min, dias, horas, minutos);
	return 0;
}
