#include "atividade2.cpp"
#include <cmath> 

// Atividade 4 -Questão 13.7 (iguais)
int iguais(NoArv *a, NoArv *b){
    // se a quantidade de nós for diferente para ou se dados diferentes
    if (quantidade_nos(a) != quantidade_nos(b) || a->info != b->info){
        return 0;
    } 
    else {
        // verifica se há elementos, se for null (árvore não eb) dá falha no disco
        if(a->esq && b->esq) iguais(a->esq, b->esq);
        if(a->dir && b->dir) iguais(a->dir, b->dir);
    }
        return 1;
}


void imprime_decrescente(NoArv *raiz){};

int main(){
    NoArv *c = arv_criavazia();
    NoArv *b = arv_cria(1,arv_cria(2,arv_cria(4,arv_criavazia(),arv_criavazia()),arv_cria(5,arv_criavazia(),arv_criavazia())),arv_cria(3,arv_criavazia(),arv_cria(6,NULL,NULL)));
    string a = (iguais(c,b) == 0) ? "Diferentes\n" : "Iguais\n";
    NoArv *d = arv_cria(1,arv_cria(2,arv_cria(4,arv_criavazia(),arv_criavazia()),arv_cria(5,arv_criavazia(),arv_criavazia())),arv_cria(3,arv_criavazia(),arv_cria(6,NULL,NULL)));
    string e = (iguais(b,d) == 0) ? "Diferentes\n" : "Iguais\n";
    cout<<e;
    
}
