/*Um programa para gerenciar os saques de um caixa eletr�nico deve possuir algum mecanismo para decidir o
numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um poss�vel
crit�rio seria o da "distribui��o �tima" no sentido de que as notas de menor valor dispon�veis fossem
distribu�das em n�mero m�nimo poss�vel. Por exemplo, se a maquina s� disp�e de notas de R$ 50, de R$ 20,
de R$ 10, de R$ 5 e de R$ 2, para uma quantia solicitada de R$ 87, o programa deveria indicar uma nota de
R$ 50, uma nota de R$20,00, uma nota de R$ 10, uma nota de R$ 5 e uma nota de R$ 2. Escreva um programa
que receba o valor da quantia solicitada e retorne a distribui��o das notas de acordo com o crit�rio da
distribui��o �tima.*/

#include <stdio.h>

int main(){
	int dinheiro,  valor_disponivel, notas50, notas20, notas10, notas5, notas2;
	
	printf("Valor do saque: ");
	scanf("%d", &dinheiro);
	
	notas50 = dinheiro / 50;
	dinheiro = dinheiro % 50;
	notas20 = dinheiro / 20;
	dinheiro = dinheiro % 20;
	notas10 = dinheiro / 10;
	dinheiro = dinheiro % 10;
	notas5 = dinheiro / 5;
	dinheiro = dinheiro % 5;
	notas2 = dinheiro / 2;
	
	valor_disponivel = notas50 * 50 + notas20 * 20 + notas10 * 10 + notas5 * 5 + notas2 * 2;
	
	printf("Voce podera sacar R$%d\n", valor_disponivel);
	printf("%d notas de R$50.00\n", notas50);
	printf("%d notas de R$20.00\n", notas20);
	printf("%d notas de R$10.00\n", notas10);	
	printf("%d notas de R$5.00\n", notas5);	
	printf("%d notas de R$2.00\n", notas2);	
		
	return 0;
}
