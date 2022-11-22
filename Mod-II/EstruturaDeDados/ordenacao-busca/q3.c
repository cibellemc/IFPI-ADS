# include "funcoes-ordenacao.h"

void empurra(int v[], int n){ // item max para ultima posi��o
	int i;
	for(i = 0; i < n; i++){
		if(v[i] > v[i + 1]){
			troca(v[i], v[i+1]);
		}
	}
}

void mostra(int vetor[], int n){
	int i;
	for(i= 0;i<n;i++){
		printf("%d\n",vetor[i]);		
	}
}

void bubbleSort(int vetor[], int n){
    if(n == 0) return;
    else {
        empurra(vetor, n);
        bubbleSort(vetor, n-1);  // depois que o maior est� no fim, realiza a compara��o com os demais, repetindo o empurra	
    }
}

int main(){
	int i;
	int vetor[] = {3,5,16,35,12,666,8,4};
	bubbleSort(vetor, 7); // coloca um n�mero a menos que o tamanho, pois o empurra manda pro final e a compara��o come�a sempre do que ta na frente
	mostra(vetor,8);
	return 0;
}
