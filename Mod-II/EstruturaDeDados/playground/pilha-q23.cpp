
#include <iostream>
#include "./pilha1q23.h"
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <string.h>
#include <string>
#include <cstring>
using namespace std;

int main(){
    string frase;

    cout << "Digite a frase: ";
    getline(cin, frase);

    int qtd_de_caracteres = frase.length();

    Pilha a = pilha(qtd_de_caracteres+1);

    cout << frase << endl;

    for(int i = 0; i <= frase.length(); i++){
        if(frase[i] != ' ' && frase[i] != '\0'){
            push(frase[i], a);
        } else {
            while(!pilhaVazia(a)){
                cout << pop(a);
            }
            cout << " ";
        }
    }
    return 0;
}

