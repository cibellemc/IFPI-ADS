// dupla: Marcos Vinícius Ferreira

# include <iostream> // para usar bool
using namespace std;

bool linearSearch(int x, int vetor[], int n){
    if(n == 0) return false;
    if(vetor[n] == x) return true;
	return linearSearch(x, vetor, n-1); // se nao tiver, "pergunta" novamente sobre o mesmo valor x para a posicao anterior
}

int main(){
	int vetor[] = {3,5,16,35,12,666,8,7};
	if (linearSearch(12, vetor, 8) == true) printf("Numero no vetor");
	return 0;
}
