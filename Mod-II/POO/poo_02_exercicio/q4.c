// C, por exemplo, permite que um dado seja acessado/interpretado como se fosse outro. Pode, por exemplo, 
// gravar um float e acessar como se fosse um int. É certo que o resultado será catastrófico neste caso, mas é possível.

#include <stdio.h>

int main(){
	
float num = 3.18;
printf("%d", num);

return 0;	

}

// resulta em: -536870912