// dupla: Marcos Vinícius Ferreira

# include <iostream>
using namespace std;

bool binarySearch(int x, int vetor[], int inicio, int n){
	int media = (inicio+n)/2;
	
	if(vetor[media] == x) return true;
	
	if(x < vetor[media]) n = media-1;
    else n = media+1;
    
    if(n < inicio) return false;
    
    return binarySearch(x, vetor, inicio, n); 
	
}

int main(){
	int vetor[] = {3,5,16,35,12,666,8,7};
	if (binarySearch(3, vetor, 0, 8) == true) printf("Numero no vetor");
	return 0;
}
