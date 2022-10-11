#include <stdlib.h>
#include <string>
#include <iostream>
#include <string>
using namespace std;

typedef struct aluno{
    int mat;
    string nome;
} Aluno;

Aluno lista[30];
int ultimo = 0; 

int tam = sizeof(lista)/sizeof(Aluno);

int inserirDesordenado(Aluno e){
    if (ultimo < 30){
        lista[ultimo] = e;
        ultimo++;
        return true;
    } else {
        cout<<"\nNao foi possivel inserir. lista cheia.";
    }
} 
    
//0 é falso
int procura(int matprocurada){
    int i;
    for (i = 0; i < tam; i++){
        if (lista[i].mat == matprocurada){
            return true;
        } 
    } return false;
}

void remover(Aluno e){
    int achou;
        
    achou = procura(e.mat);
    if(achou != 0){
        //mostre(achou);
    } else{
        cout<<"\nNúmero de matrícula não encontrado.";
    }
} 


/*void mostre(int pos){
    //retrnar da posicao
    //dads da matricula e nome
    cout<<("%d", a );
}*/

int main(){
    Aluno a;
    a.mat = 3;
    a.nome = "Cibelle";
    inserirDesordenado(a);
    cout<<procura(2);
    return 0;
}
