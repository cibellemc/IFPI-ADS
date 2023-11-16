using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

        [NotMapped]
        [Display(Name = "Autores")]
        public List<int> AutoresIds { get; set; } // Lista de IDs dos autores selecionados
        public virtual ICollection<Autor> Autores { get; set; } // Lista de autores
    }
}