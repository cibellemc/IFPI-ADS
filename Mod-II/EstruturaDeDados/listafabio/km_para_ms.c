//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

#include <stdio.h>

main(){
	float vel_ms, vel_kh;
	
	printf("Informe a velocidade em km/h: ");
	scanf("%f", &vel_kh);
	
	vel_ms = vel_kh / 3.6;
	
	printf("A velocidade corresponde a %.1f m/s", vel_ms);
}
