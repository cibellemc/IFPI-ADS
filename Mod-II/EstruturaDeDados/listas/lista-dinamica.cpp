#include <stdio.h>
#include <string.h>
#include <iostream>

using namespace std;

class No { // tem como atributos: matricula, nome e um ponteiro pro próximo elemento, que tambem é um nó
	public:
		int mat; 
		char nome[23]; 
		No *prox;
		
		No(int m, char n[23]) { // construtor
			mat = m;
			strcpy(nome, n);			
			prox = NULL;
		}
};

class Lista {
	public:
		No *inicio;
		No *fim;
	
	    Lista() { 
	    	inicio = NULL;
	    	fim = NULL;
		}

		// Adiciona um elemento ao final da lista
		void addToFinal(int m, char n[23]) {
			No *novo = new No(m, n);
			
			if (lst_vazia()) { 
				inicio = novo;
				fim = novo;
			} else {
				fim->prox = novo; // o fim aponta para o novo elemento
				fim = novo; // fim recebe novo elemento
			}
		}

		// Verifica se a lista está vazia
		int lst_vazia() {
			return (inicio == NULL); // se o início ou o fim são null, a lista está vazia
		}

		// Adiciona um elemento ao início da lista
		void addToInicio(int m, char n[23]) {
			No *novo = new No(m, n);

			if (lst_vazia()) { 
				inicio = novo; // se a lista estiver vazia, inicio e fim, que antes apontavam para null, 
				fim = novo; // agora receberão o novo elemento (nó com matrícula e nome)
			} else {
				novo->prox = inicio; // é "salvo" o nó anterior
				inicio = novo; // atualiza elemento no inicio
			}
		}

		// Mostra todos os elementos da lista
		void mostra() {
			cout << "\n## mostra() ##\n";

			if (lst_vazia()) {
				cout << "\nLista vazia!!!";
			} else {
				No *atual = inicio;

				while (atual != NULL) {
					cout << "\n- Nome: " << atual->nome << "\nMatricula: " << atual->mat << "\n";
					atual = atual->prox;
				}
			}
		}

		// Auxiliar no método remove, retorna o endereço do anterior
		No *busca(int mat) {
			No *atual = inicio; 

			while (atual != NULL) { 
				if (atual->mat == mat) {
					return atual;
				} else {
					atual = atual->prox; // vai percorrendo ate chegar no que aponta pra null
				}
			}

			cout << "\nO elemento não está na lista";
		}
		
		// Remove matrícula específica
		void remove(int mat) {
			No *anterior, *atual;

			anterior = NULL;
			atual = inicio;

			while (atual != NULL) {
				if (atual->mat == mat) { 
					if (atual == inicio) { 
						inicio = inicio->prox; // se for o primeiro elemento, o início recebe o próximo, "trazendo" os demais nós
						break; 

					} else if (atual == fim) { // se for o último elemento, o fim recebe o anterior e aponta para null
						fim = anterior;
						fim->prox = NULL;
						break;

					} else {
						anterior->prox = atual->prox; 
						break;
					}
				}

				anterior = atual; // anterior recebe o que estava corrente
				atual = atual->prox; // atual torna-se o proximo
			}
		}

		void removeTodos() {
			No *atual = inicio;
			No *proximo = NULL;

			while (atual != NULL) {
					proximo = atual->prox;
					cout<<"Apaga: "<<atual->nome << endl;;
					free(atual);
					atual=proximo;						
			}
			inicio=atual;
		}

		// Criar uma nova lista que seja o inverso da primeira
		Lista *cria_lista_inversa() {
			Lista *inversa;
			No *atual = inicio;

			while (atual != NULL) {
				inversa->addToInicio(atual->mat, atual->nome); // vai adicionando ao contrário

				atual = atual->prox;
			}

			return inversa;
		}
};

main() {
	Lista *lista = new Lista();

	lista->addToFinal(1, (char*) "Cibelle");
	lista->addToFinal(2, (char*) "Marcos");
	lista->addToFinal(3, (char*) "Daniel");
	lista->addToInicio(4, (char*) "Kastier");
	lista->addToInicio(5, (char*) "Rafael");

	lista->mostra();

	Lista *inversa = lista->cria_lista_inversa();

	inversa->mostra();
}
