# include <string>
# include <iostream>
using namespace std;

class Carro{
    public:
        string modelo;
        string marca;

        Carro(){} //inicializa construtor com valor default
        Carro(char x[23], string y){ //se quiser inicializar
            modelo = x;
            marca = y;
        }
};

main(){

}
