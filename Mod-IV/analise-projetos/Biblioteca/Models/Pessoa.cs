using System.ComponentModel.DataAnnotations;

namespace Biblioteca.Models
{
    public class Pessoa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        
        [Display(Name = "Endereço")]
        public string Endereco { get; set; }
    }
}