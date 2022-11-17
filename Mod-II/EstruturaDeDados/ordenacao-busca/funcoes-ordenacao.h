# include <stdio.h>
# define troca(a,b){
	int x = a;
	a = b;
	b = x;
}

int soma(int v[], int n){
	int s = 0;
	int i = 0;
	
	while(i < n){
		s += v[i];
		i++
	}
	return s;
}

int crescente(int v[], int n){ // verifica se está em ordem crescente
	int i = 0;
	
	while(i < n - 1){ // menor que o penúltimo
		if(v[i] > v[i+1]){ // se o atual for menor que o prox
			return 0;
		}
		i++;
	}
	return 1;
}

void bubble sort(int v[], int n){ // ordenação por trocas
	for(int i = 1; i <= n; i++){ // pra cada elemento do vetor
		for(int j = 0; j < n - 1; j++){ 
			if(v[j] > v[j+1]) // se o atual for maior que o proximo
				troca(v[j],v[j+1])
		}
	}
}

int seleciona(int v[], int n){ // ordenação por seleção
	int i = 0;
		for(int j = 1; j < n; j++){ 
			if(v[i] < v[j]) // se o atual (i) for menor que o proximo (j)
				i = j; // i recebe posição do maior
		}
	}
}

void selection_sort (int v[], int n){
	while(n > 1){ // enquanto não chega ao início
		troca(v[seleciona(v,n)], v[n - 1]); // na primeira volta, troca o v (na posição do maior) com a última
		n-- // exemplo: 50 27 19
	}
}

void insere(int x, int v[], int n){ // ordenação por inserção
	while(n > 0 && x < v[n - 1]){ // enquanto não chega ao início e x é maior que o anterior
		v[n] = v[n - 1]; // elemento atual recebe o anterior
		n--;
	}
	v[n] = x;
}

void insertion_sort(int v[], int n){
	for(int i = 0; i < n; i++){
		insere(v[i], v, i); // o inicial no vetor de i posições
	}
}

void intercala(int v[], int p, int m, int u){
	int *w = malloc((u - p + 1) * sizeof(int));
	if(w == NULL){
		abort();
	}
	int i = p, j = m + 1, k = 0;
	
	while(i <= m && j <= u)
		if(v[i] < v[j]) w[k++] = v[i++];
		else w[k++] = v[j++0;]
		
	while(i <= m) w[k++] = v[i++];
	
	while(j <= u) w[k++] = v[j++];
	
	for(k = 0; k <= u - p; k++) v[p + k] = w[k];
	
	free(w);
}

void merge_sort(int v[], int p, int u){ // ordenação por intercalação
	if(p == u) return; // ja esta ordenado (tem um item só)
	int m = (p + u) / 2; // cada divisão pela metade
	merge_sort(v, p, m);
	merge_sort(v, m+1, u);
	intercala(v, p, m, u);
}

int linear_search(int x, int v[], int n){ // busca linear
	for(int i = 0; i < n; i++)
		if(x == v[i]) return 1; // se o valor corresponder a algum elemento do vetor
	return 0;
}

int binary_search(int x, int v[], int n){
	int p = 0;
	int u = n - 1;
	while(p <= u){
		int m = (p + u)/2;
		if(x == v[m]) return 1;
		else p = m + 1;
	}
	return 0;
}
