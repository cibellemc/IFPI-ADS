using System.ComponentModel.DataAnnotations;

namespace Biblioteca.Models
{
    public class Bibliotecario : Pessoa
    {
        [Display(Name = "Nº Registro")]
        public int NumeroDeRegistro { get; set; }
    }
}