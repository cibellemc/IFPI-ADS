# include "polinomio.h"

int soma (Poli P, Poli Q){
	Poli resultado;
	
	while (P != NULL){
		adt(P->coef, P->expo, &resultado);
		P = P->prox;
	}
	
	while(Q!= NULL){
		adt(Q->coef, Q->expo, &resultado);
		Q = Q->prox;
	}

	return resultado;
}

int main() {
    Poli c1 = termo(8, 1, NULL);
    Poli b1 = termo(3, 2, c1);
    Poli p1 = termo(4, 3, b1);

    Poli c2 = termo(6, 2, NULL);
    Poli b2 = termo(3, 3, c2);
    Poli p2 = termo(7, 4, b2);

    Poli resultado = soma(p1, p2);

	exibep(resultado);

    return 0;
}
