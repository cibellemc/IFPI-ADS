#include <stdlib.h>
#include <string>
#include <iostream>
using namespace std;

typedef struct aluno{
    int mat;
    string nome;
} Aluno;

Aluno turma[3];
int i = 0;
int tam = sizeof(turma) / sizeof(Aluno);

void inserir(){
    int resp;
    cout<<("Inserir novo aluno:\n");

    do {
        if (i < tam){
            cout<<"\nMatricula - Aluno "<<i << ": ";
            cin>>turma[i].mat;
            cout<<"Nome: ";
            cin>>turma[i].nome;
            i++;
            cout<<"\nAluno inserido com sucesso.";
        } else {
            cout<<"\nNao foi possivel inserir. Turma cheia.";
            break;
        }

        cout<<"\nInserir outro? (1-Sim/2-Nao): ";
        cin>>resp;
    } while(resp == 1);
}

int procura(int matprocurada){
    for (int j = 0; j < tam; j++){
        if (turma[j].mat == matprocurada ){
            return j;
        } 
    } return -1;
}

void mostre(int pos){
    cout<<"\nNome - Aluno "<<pos<<": "<<turma[pos].nome;
    cout<<"\nMatrícula - Aluno "<<pos<<": "<<turma[pos].mat<<"\n";
}

/*void remover(int matprocurada){
    int achou = procura(matprocurada);
    // mover todos os elementos que estão após o elemento que deve ser removido uma posição a frente.
    if(achou !=-1){
        Aluno aux;
        for (int j = achou; j < tam; j++) {
            aux = turma[j];
            turma[j] = turma[j + 1];
            turma[j + 1] = aux;
        }
        cout<<"\nAluno "<<matprocurada<<": "<<"removido com sucesso!";
    } else{
        cout<<"\nO aluno não foi removido!";
    }
}*/

void remover(){
    cout<<("Remover aluno:\n");

    int i, achou, resp, matAremover;
    do{
        cout<<"\nMatricula"<< ": ";
        cin>>matAremover;

        achou = procura(matAremover);
        if(achou !=-1){
            mostre(achou);
            cout<<"\nDeseja remover o aluno? (1-Sim/2-Nao): ";
            cin>>resp;

            if(resp ==1){
                // mover todos os elementos que estão após o elemento que deve ser removido uma posição a frente.
                Aluno aux;
                for (int j = achou; j < tam; j++) {
                    aux = turma[j];
                    turma[j] = turma[j + 1];
                    turma[j + 1] = aux;
                }
                cout<<"\nAluno removido com sucesso!";

            } else{
                cout<<"\nO aluno não foi removido!";
            }

        } else{
            cout<<"\nNúmero de matrícula não enresprado.";
        }

        cout<<"\nRemover outro? (1-Sim/2-Nao): ";
        cin>>resp;
    } while (resp == 1);
}

int main(){
    inserir();
    remover();
    mostre(0);
    return 0;
}