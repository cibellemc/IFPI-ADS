//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

#include <stdio.h>

main(){
	float vel_ms, vel_kh;
	
	printf("Informe a velocidade em m/s: ");
	scanf("%f", &vel_ms);
	
	vel_kh = vel_ms * 3.6;
	
	printf("A velocidade corresponde a %.1f km/h", vel_kh);
}
