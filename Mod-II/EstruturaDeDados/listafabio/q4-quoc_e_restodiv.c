//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

#include <stdio.h>

main(){
	int n1, n2, quociente, resto_div;
	
	printf("Informe o 1o numero: ");
	scanf("%d", &n1);
	
	printf("Informe o 2o numero: ");
	scanf("%d", &n2);
	
	quociente = n1 / n2;
	resto_div = n1 % n2;
	
	printf("Quociente da divisao: %d\n", quociente);
	printf("Resto da divisao: %d",resto_div);
	
}
