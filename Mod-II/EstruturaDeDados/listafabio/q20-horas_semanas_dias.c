//Leia um n�mero inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

#include <stdio.h>

int main(){
	int horas, sem, dias, hrs;
	
	printf("N�mero de horas: ");
	scanf("%d", &horas);
	
	// 1 semana = 168 horas
	sem = horas / 168;
	dias = (horas - sem * 168) / 24;
	hrs = horas % 24;
	
	printf("%d horas correspondem a: ", horas);
	printf("%d semana(s), %d dia(s) e %d hora(s) ", sem, dias, hrs);
	
	return 0;
}
