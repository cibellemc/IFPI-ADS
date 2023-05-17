#include <iostream>
#include <stdlib.h>
#ifndef THREADED_THREE
#define THREADED_THREE
using namespace std;

template<class T>
class ThreadedNode {
public:
    ThreadedNode(){
        left = right = 0;
    }
    ThreadedNode(const T& e, ThreadedNode *l = 0, ThreadedNode *r = 0){
        el = e; left = l; right = r; successor = 0;
    }
    T el;
    ThreadedNode * left, *right;
    unsigned int successor: 1;
};

template<class T>
class ThreadedTree {
public:
    ThreadedTree(){
        root = 0;
    }
    void insert(const T&);
    void preorder();
    void inorder();
protected:
    ThreadedNode<T> * root;
};

#endif

template<class T>
void ThreadedTree<T>::inorder(){
    ThreadedNode<T> *prev, *p = root;
    if (p != 0){
        while (p->left != 0)
            p = p->left;
        while (p != 0){
            visit(p);
            prev = p;
            p = p->right;
            if (p != 0 && prev->successor == 0)
                while (p->left != 0)
                    p = p->left;

        }    
    }
}

template<class T>
void visit(ThreadedNode<T> *p){
    cout << p->el << " ";
}

template<class T>
void ThreadedTree<T>::insert(const T& element){
    ThreadedNode<T> *p = root, *prev = 0;
    while (p != 0){
        prev = p;
        if (element < p->el)
            p = p->left;
        else if (element > p->el)
            p = p->right;
        else {
            cout << "Elemento já existe na árvore." << endl;
            return;
        }
    }
    if (root == 0)
        root = new ThreadedNode<T>(element);
    else if (element < prev->el){
        prev->left = new ThreadedNode<T>(element);
        prev->successor = 1;
        prev->left->right = prev;
    }
    else {
        prev->right = new ThreadedNode<T>(element);
        prev->right->left = prev;
    }
}

template<class T>
void preorderHelper(ThreadedNode<T> *p){
    if (p != 0){
        visit(p);
        preorderHelper(p->left);
        preorderHelper(p->right);
    }
}

template<class T>
void ThreadedTree<T>::preorder(){
    preorderHelper(root);
}

int main() {
    ThreadedTree<int> tree;
    
    // Inserindo nós na árvore
    tree.insert(5);
    tree.insert(2);
    tree.insert(7);
    tree.insert(1);
    tree.insert(3);
    tree.insert(6);
    tree.insert(8);
    
    // Imprimindo a árvore em ordem de pré-ordem
    cout << "Pré-ordem: ";
    tree.inorder();
    cout << endl;
    
    return 0;
}