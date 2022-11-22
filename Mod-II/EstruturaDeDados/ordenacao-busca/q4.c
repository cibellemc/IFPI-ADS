// dupla: Marcos Vinícius Ferreira

# include "funcoes-ordenacao.h"

void selectionSort(int vetor[], int n){
    if(n == 0) return;
    troca(vetor[seleciona(vetor, n)], vetor[n-1]); // troca o elemento na maior posição com o elemento da posição anterior
	selectionSort(vetor, n-1);    
}

int main(){
	int i;
	int vetor[] = {3,5,16,35,12,666,8,4};
	selectionSort(vetor, 8); 
	mostra(vetor,8);
	return 0;
}
