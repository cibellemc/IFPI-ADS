# include <iostream>
# define troca(a,b){int x = a; a = b;b = x;}

using namespace std;

void empurra(int v[], int n){ // item max para ultima posição
	int i;
	for(i = 0; i < n; i++){
		if(v[i] > v[i + 1]){
			troca(v[i], v[i+1]);
		}
	}
}

/*void bubbleSort(int v[], int n){
	int i;
	for (i = 0; i <= n; i++){
		empurra(v,n); 
		bubbleSort(v, n-1); // depois que o maior está no fim, realiza a comparação com os demais, repetindo o empurra	
	}
}*/


void mostra(int vetor[], int n){
	int i;
	for(i= 0;i<n;i++){
		printf("%d",vetor[i]);		
	}
}

void bubbleSort(int vetor[], int n){
    if(n == 0) return;
    else {
        empurra(vetor, n);
        bubbleSort(vetor, n-1);
    }
}

int main(){
	int i;
	int vetor[] = {3,5,16,35,12,666,8,4};
	bubbleSort(vetor, 7);
	for(i = 0; i < 8; i++) {
        cout << vetor[i] << endl;
    }
}
