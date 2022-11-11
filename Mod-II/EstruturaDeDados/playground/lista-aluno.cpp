# include <string>
# include <iostream>
using namespace std;

class Aluno{
    private:
        int mat;
        string nome;
    public:
    Aluno(int m, string n){
        mat = m;
        nome = n;
    }
    string getNome(); // declaracao
    int getMatricula();
};

string Aluno:: getNome(){
    return nome; //acessar atributos privados
}

int Aluno:: getMatricula(){
    return mat; //acessar atributos privados
}

main(){
Aluno a1(1, "carlos"); //chamando o construtor e passando parâmetros, variavel do tipo aluno
Aluno *a2 = new Aluno(2, "jose"); //reserva um endereço que aponta pra tipo aluno

cout<<"\nNome: "<<a1.getNome();
cout<<"\nMat: "<<a1.getMatricula();

cout<<"\nNome: "<<a2->getNome();
cout<<"\nMat: "<<a2->getMatricula();
}
