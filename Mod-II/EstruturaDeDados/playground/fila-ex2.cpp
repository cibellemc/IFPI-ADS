#include <stdlib.h>
#include <string>
#include <iostream>
using namespace std;

class Carro {
    private:
        string modelo;
        string marca;
    public:
        Carro(string x, string y){
            modelo = x;
            marca = y;
        }
        string getModelo();
};

string Carro :: getModelo(){
    return marca;
}

main(void){
    Carro c1("uno", "fiat");
    cout<< c1.getModelo()<<endl;
}
