#include "lista.hpp"

Lista Adj [] = { no(1, no(2, no(3, NULL))),
    no(0, no(3, NULL)),
    no(0, no(3, no(4, NULL))),
    no(2, no(5, no(1, NULL))),
    NULL,
    no(3, no(4, NULL)),
};

int main(){
    for (int i = 0; i < sizeof(Adj) / sizeof(Lista); i++) {
        cout << "Lista " << i << ": ";
        exibir(Adj[i]);
        cout << endl;
    }

    return 0;
}