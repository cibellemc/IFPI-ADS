#include <queue>
#include <iostream>
using namespace std;

template<class T>

class ArvoreNo {
	public:
		T el;
		ArvoreNo<T> *left,*right;
		ArvoreNo(){
			left = right = 0;			
		}
		ArvoreNo(T e, ArvoreNo<T> *l = 0, ArvoreNo<T> *r = 0){
			el = e;
			left = l;
			right = r;
		}
};

template<class T>
class Arvore {
	protected:
		ArvoreNo<T> *root;
	public:
		Arvore(){
			root = 0;			
		}

		// destrutor - libera espaço de memória
		~Arvore(){
			clear();
		}

		void clear(){
			/* essa implementação causa vazamento de memória
			clear(root);
			root=0; */

			if (root != nullptr) { 
				clear(root->left);
				clear(root->right);
				delete root;
				root = nullptr; //após a liberação de todos os nós
			}
		}
		
		ArvoreNo<T>* getRoot(){
			return root;
		}

		bool isEmpty() const {
		   return root = 0;
		}
		   
		void visit(ArvoreNo<T> *p){
			cout<<p->el<<" ";
		} 
		
		T search(T el) {
			ArvoreNo<T> *p=root;
			while (p!=0){
				
				if (el == p->el)		
					return p->el;								    
				else{					
					if (el < p->el)
				       p = p->left;
				   else p = p->right;
			 	}
		    }
			return 0;			
			
		}

		void insert(T el){
			ArvoreNo<T> *p=root,*prev=0;
			while (p!=0){
				prev = p;
				if (el<p->el)
					p = p->left;
				else p = p->right;
			}

			if (root == 0) //a arvore esta vazia
				root = new ArvoreNo<T>(el);
			else if (el < prev->el)
				prev->left = new ArvoreNo<T>(el);
			else prev->right = new ArvoreNo<T>(el);	
		}
		
		void percusoExtensao() {
			queue<ArvoreNo<T>*> q;
			q.push(root);
			
			while (!q.empty()) {
				ArvoreNo<T>* node = q.front();
				q.pop();
				visit(node);
				
				if (node->left != 0)
					q.push(node->left);
				
				if (node->right != 0)
					q.push(node->right);
			}
		}
		
		
		void preorder(ArvoreNo<T> *p){
			if (p != nullptr) {
				visit(p);
				preorder(p->left);
				preorder(p->right);
			}
		}

		void inorder(ArvoreNo<T> *p){
			if (p != nullptr) {
				inorder(p->left);
				visit(p);
				inorder(p->right);
			}
		}

		void postorder(ArvoreNo<T> *p){
			if (p != nullptr) {
				postorder(p->left);
				postorder(p->right);
				visit(p);
			}
		}
	
};

main(){
	
	Arvore<int> *a = new Arvore<int>();
	a->insert(13);
	a->insert(10);	
	a->insert(25);	
	a->insert(2);	
	a->insert(12);
	a->insert(20);
    a->insert(31);
    a->insert(29);
	
	//a->percusoExtensao();
	//a->preorder(a->getRoot());
	//a->postorder(a->getRoot());
	//a->inorder(a->getRoot());

	int procurado = a->search(20);
	if (procurado == 0)
	    cout<<"\nNao achou ";
	else
	    cout<<"\n"<<procurado<<" encontrado!";	

}

