#include <stdio.h>

int main(){
char letra = 'a';
char *ptrChar = &letra;
char **ptrPtrChar = &ptrChar;
char ***ptrPtr = &ptrPtrChar;

printf("ptrChar = %d\n", ptrChar);
printf("*ptrChar = %c\n", *ptrChar);
printf("ptrPtrChar = %d\n", ptrPtrChar);
printf("*ptrPtrChar = %d\n", *ptrPtrChar);
printf("**ptrPtrChar = %c\n", **ptrPtrChar);
printf("ptrPtr = %d\n", ptrPtr);
printf("*ptrPtr = %d\n", *ptrPtr);
printf("**ptrPtr = %d\n", **ptrPtr);
printf("***ptrPtr = %c\n", ***ptrPtr);


return 0;
}

/*	ptrChar = 6487575 - endereço de ptrChar
	*ptrChar = a - conteudo de ptrChar
	ptrPtrChar = 6487560 - endereço de ptrPtrChar
	*ptrPtrChar =  6487575 - endereço de ptrChar
	**ptrPtrChar = a - conteudo de ptrChar
	ptrPtr = 6487552 - endereço de ptrPtr
	*ptrPtr = 6487560 - endereço de ptrPtrChar: primeiro apontamento
	**ptrPtr = 6487575 - endereço de ptrChar: segundo apontamento
	***ptrPtr = a - conteudo de ptrChar
*/
