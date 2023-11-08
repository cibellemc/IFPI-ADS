namespace Biblioteca.Models
{
    public class Autor : Pessoa
    {
        public string Pseudonimo { get; set; }
        public virtual ICollection<Livro> LivrosPublicados { get; set; } 
    }
}