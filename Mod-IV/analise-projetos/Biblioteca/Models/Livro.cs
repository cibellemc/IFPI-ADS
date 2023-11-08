using System.ComponentModel.DataAnnotations;
namespace Biblioteca.Models
{
    public class Livro
    {
        public int Id { get; set; }
        [Display(Name = "Título")]
        public string Titulo { get; set; }
        [Display(Name = "Ano da Publicação")]
        public int AnoPublicacao { get; set; }
        [Display(Name = "Gênero")]
        public string Genero { get; set; }        
        [Display(Name = "Disponível")]
        public bool Disponivel { get; set; }
        public virtual ICollection<Autor> Autores { get; set; } // Lista de autores
    }
}