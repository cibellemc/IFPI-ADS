//Leia um n�mero inteiro (3 d�gitos) e escreva o inverso do n�mero. (Ex.: num = 532 ; inverso =235)

#include <stdio.h>

main(){
	int num, inverso_num,cent,dez,unid;
	
	printf("Digite um numero de 3 digitos: ");
	scanf("%d", &num);
	
	cent = num / 100;
	dez = (num - (cent * 100)) / 10;
	unid = num - cent * 100 - dez * 10;
	
	inverso_num = unid * 100 + dez * 10 + cent;
	
	printf("O inverso de %d eh %d", num,inverso_num);
}
