#include "atividade2.cpp"
#include <queue>

bool isComplete(NoArv* root) {
    if (root == nullptr) {
        return true;
    }

    bool flag = false; // Indica se um nó incompleto foi encontrado
    queue<NoArv*> q; //cria uma fila do tipo noarv
    q.push(root);

    while (!q.empty()) {
        NoArv* NoArv = q.front();
        q.pop();

        if (NoArv->esq != nullptr) {
            if (flag) {
                return false; // Se um nó incompleto já foi encontrado, o restante da árvore não pode ter filhos à esquerda
            }
            q.push(NoArv->esq);
        } else {
            flag = true; // Marca que um nó incompleto foi encontrado
        }

        if (NoArv->dir != nullptr) {
            if (flag) {
                return false; // Se um nó incompleto já foi encontrado, o restante da árvore não pode ter filhos à direita
            }
            q.push(NoArv->dir);
        } else {
            flag = true; // Marca que um nó incompleto foi encontrado
        }
    }

    return true;
}

main(){
    NoArv *b = arv_cria(1,arv_cria(2,arv_cria(4,arv_criavazia(),arv_criavazia()),arv_cria(5,arv_criavazia(),arv_criavazia())),arv_cria(3,arv_criavazia(),arv_cria(6,NULL,NULL)));

    NoArv* NoArv2 = arv_cria(2, nullptr, nullptr);
    NoArv* NoArv4 = arv_cria(4, nullptr, nullptr);
    NoArv* NoArv9 = arv_cria(9, nullptr, nullptr);
    NoArv* NoArv3 = arv_cria(3, NoArv2, NoArv4);
    NoArv* NoArv8 = arv_cria(8, nullptr, NoArv9);
    NoArv* root = arv_cria(5, NoArv3, NoArv8);

    bool resposta = isComplete(root);
    if (resposta) cout <<"completa";
    else cout<<"incompleta";
}