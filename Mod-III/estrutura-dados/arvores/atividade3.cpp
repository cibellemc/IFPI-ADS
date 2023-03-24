#include "atividade2.cpp"
#include <cmath>

// Atividade 3 -Questão 13.6 (extritamente binária)
void extritamemente_binaria(NoArv *raiz){
    int h = pow(altura(raiz),2);
    int nos = quantidade_nos(raiz);
    if(nos == h - 1){
        cout<<"Eh extritamente binária.\n";
    } else {
        cout<<"Não é extritamente binária.\n";
        // para ser eb precisaria ter "<<h<<" nos. Tem "<<nos;
    }
}

int main(){
    NoArv *c = arv_criavazia();
    extritamemente_binaria(c);
    NoArv *b = arv_cria(1,arv_cria(2,arv_cria(4,arv_criavazia(),arv_criavazia()),arv_cria(5,arv_criavazia(),arv_criavazia())),arv_cria(3,arv_criavazia(),arv_cria(6,NULL,NULL)));
    extritamemente_binaria(b);
}
