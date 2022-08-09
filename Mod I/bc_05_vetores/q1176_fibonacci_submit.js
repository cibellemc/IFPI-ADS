function main(){
    const  qtd_repeticoes = Number(lines[0])
    let count = 0
    let index = 0

    while (count < qtd_repeticoes){

        index++
        let numero = Number(lines[index])
        console.log(fibonacci(numero))
        count++
    }
}

function fibonacci(num){

    let vetor_fib = new Array(num)

    vetor_fib[0] = 0
    vetor_fib[1] = 1

    for (let i = 2; i  <= num; i++){
        //vetor atual recebe a soma dos passados
        //ex 4: 0 1 vetorfib[2]= 0+1 vetorfib[3]= 2+1
        vetor_fib[i] = vetor_fib[i-1] + vetor_fib[i-2]
        //console.log(vetor_fib[i])
    }

    return (`Fib(${num}) = ${vetor_fib[num]}`)
}

main()