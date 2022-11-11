# include <stdio.h>
# include <stdlib.h>
# include <math.h>

typedef struct poli{
	float coef;
	int expo;
	struct poli *prox;	
} *Poli;

Poli termo(float c, int e, Poli p){
	Poli n = malloc(sizeof(struct poli));
	n->coef = c;
	n->expo = e;
	n->prox = p;
	
	return n;
}

void exibep(Poli P){
	if(P == NULL) return; // se for nulo encerra
	printf("%+.1f", P->coef); // +3.0
	if(P->expo != 0)printf("x^%d ", P->expo); // +3.0x^5
	exibep(P->prox);
}

void adt(float c, int e, Poli *P){ // adição de polinomio
	if (*P == NULL || (*P)->expo < e){ // se tiver conteúdo nulo ou o expoente aual for menor que o novo
		*P = termo(c, e, *P); // o conteudo atual recebe a nova parcela do polinomio (inserir comum)
	} else if ((*P)-> expo == e){ // se o expoente novo for igual ao atual, soma
		(*P)->coef += c;	
		if ((*P)->coef == 0){ // se a soma der 0 (ex: -3x5 + 3x5_
			Poli n = *P; // variavel auxiliar
			*P = n->prox; // conteudo atual recebe o prox
			free(n); // elimina termo zerado
		}
	} else {
		adt(c, e, &(*P)->prox); // chamada recursiva para "levar todos pra tras"
	}
}

float valor(Poli P, float x){ // avaliação. é a substituicao do f(x)
	if (P == NULL) return 0;
	else return P->coef*pow(x,P->expo) + valor(P->prox, x); 
}


Poli derivada(Poli P){
	if(P == NULL || P->expo == 0) return NULL;
	return termo(P->coef * P->expo, P->expo - 1, derivada(P->prox));
}

void destroip(Poli *P){
	if (*P == NULL) return;
	destroip(&(*P)->prox);
	free(*P);
	*P == NULL;
}
