#include <stdlib.h>
#include <string>
#include <iostream>
#include <string>
using namespace std;

typedef struct aluno{
    int mat;
    string nome;
} Aluno;

/*Aluno * turma(){
    int qtdAlunos;
    cout<<("Quantidade de alunos a inserir: ")
    cin>>("%d", qtdAlunos)
    Aluno turma[qtdAlunos];
    return turma;
}*/

/*Aluno fila[](int tamanho){
	Aluno f[tamanho];
	return f; 
}*/

void inserir(){
//void inserir(qtdAlunos){
    int i = 0;
    int cont;

    int qtdAlunos;
    cout<<("Quantidade de alunos a inserir: ");
    cin>>("%d", qtdAlunos);
    Aluno turma[qtdAlunos];

    int tam = sizeof(turma)/sizeof(Aluno);
    //Aluno t[tamanho];
    //Aluno turma[qtdAlunos];
    //int tamanhoArray = sizeof(turma)/sizeof(Aluno); //o tamanho total de turma dividido por o valor de um aluno

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

        cout<<"\nInserir outro? (1-Sim/2-Nao)";
        cin>>cont;
    } while(cont == 1);
}

/*void remover(Aluno  turma[]){
    int matprocurada, i, cont, achou, resp;
    do{
        cout<<"\nRemover aluno: ";
        cont<<"\nMatrícula do aluno: ";
        cin>>matprocurada;
        achou = procura(matprocurada);
        if(achou !=-1){
            //mostre(achou);
            cout<<procura()
            cout<<"\nDeseja remover o aluno? (1-Sim/2-Nao)";
            cin>>resp;
            if(resp ==1){
                cout<<"\nAluno removido com sucesso!";
            } else{
                cout<<"\nO aluno não foi removido!";
                break;
            }
        } else{
            cout<<"\nNúmero de matrícula não encontrado.";
        }

        cout<<"\nRemover outro? (1-Sim/2-Nao)";
        cin>>cont;
    } while (cont == 1);
}

int procura(Aluno  turma[], int matprocurada){
    int i, matprocurada;
    cout<<"\nConsultar aluno";
    cout<<"\nMatrícula do aluno: ";
    cin>>matprocurada;

    int tamanhoArray = sizeof(turma)/sizeof(Aluno);
    for (i = 0; i < tamanhoArray; i++){
        if (turma[i].mat === matprocurada ){
            return turma[i].mat;
            break;
        } 
    }
}

void mostre(Aluno * a){
    cout<<("%d", a );
}*/

int main(){
    inserir();
    //cout<<("\n%d", procura(inserir()));
    return 0;
}
