// dupla: Marcos Vinícius Ferreira

# include "funcoes-ordenacao.h"

void insertionSort(int vetor[], int n){
	if (n == 0) return;
	insertionSort(vetor, n-1); // se inserir antes da recursão dá erro
	insere(vetor[n-1], vetor, n-1);	

}

int main(){
	int vetor[] = {3,5,35,12,666,14};
	insertionSort(vetor,6); 
	mostra(vetor,6);
	return 0;
}
