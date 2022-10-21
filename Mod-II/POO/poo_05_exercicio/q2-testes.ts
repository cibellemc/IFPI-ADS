import { Postagem, Microblog } from "./q2-microblog"

function m(){

    let postagem1 : Postagem = new Postagem(1, "Testando código!! :)", 0)
    let postagem2 : Postagem = new Postagem(2, "Acabei de conhecer o método Math.max!! DAORAA", 0)
    let postagem3 : Postagem = new Postagem(3, "Tenho até 22h pra terminar!! SOS", 0)
    let postagem4 : Postagem = new Postagem(4, "Preciso implementar um if pra não permitir postagem com id igual", 0)
    let postagem5 : Postagem = new Postagem(5, "#typescript", 0)

    let blog : Microblog = new Microblog()

    blog.novaPostagem(postagem1)
    blog.novaPostagem(postagem2)
    blog.novaPostagem(postagem3)
    blog.novaPostagem(postagem4)
    blog.novaPostagem(postagem5)

    postagem1.curtir()
    postagem1.curtir()
    postagem1.curtir()
    postagem1.curtir() //4
    postagem2.curtir() //1
    postagem3.curtir()
    postagem3.curtir()
    postagem3.curtir()
    postagem3.curtir()
    postagem3.curtir()
    postagem3.curtir() //6
    postagem4.curtir() 
    postagem4.curtir() //2

    /*console.log(postagem1.quantidadeCurtidas)
    console.log(postagem2.quantidadeCurtidas)
    console.log(postagem3.quantidadeCurtidas)
    console.log(postagem4.quantidadeCurtidas)*/
    console.log("mais curtida:");
    
    console.log(blog.maisCurtida())
    blog.curtirPost(5)
    blog.curtirPost(5)
    blog.curtirPost(5)
    blog.curtirPost(4)
    blog.curtirPost(5)
    blog.curtirPost(1)
    blog.curtirPost(1) //7

    console.log("mais curtida:");
    console.log(blog.maisCurtida())

    blog.toString()
    blog.excluirPostagem(2)
    blog.toString()

}
m()