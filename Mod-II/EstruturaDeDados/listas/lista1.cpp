#include <stdlib.h>
#include <string>
#include <iostream>
#include <string>
using namespace std;

typedef struct aluno{
    int mat;
    string nome;
} Aluno;

void inserir(){
//void inserir(qtdAlunos){
    int qa = 0;
    int cont;

    /*int qtdAlunos;
    printf("Quantidade de alunos a inserir: ")
    scanf("%d", qtdAlunos)*/

    Aluno turma[5];
    //Aluno turma[qtdAlunos];
    //int tamanhoArray = sizeof(turma)/sizeof(Aluno); //o tamanho total de turma dividido por o valor de um aluno

    printf("Inserir novo aluno:\n");
    do {
        if (qa < 5){
            cout<<"\nMatricula - Aluno "<<qa << ": ";
            cin>>turma[qa].mat;
            cout<<"Nome: ";
            cin>>turma[qa].nome;
            qa++;
            cout<<"\nAluno inserido com sucesso.";
        } else {
            cout<<"\nNao foi possivel inserir. Turma cheia.";
            break;
        }

        cout<<"\nInserir outro? (1-Sim/2-Nao)";
        cin>>cont;
    } while(cont == 1);
}

int main(){
    inserir();
    return 0;
}
