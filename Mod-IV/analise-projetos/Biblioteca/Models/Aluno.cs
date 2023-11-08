using System.ComponentModel.DataAnnotations;

namespace Biblioteca.Models
{
    public class Aluno : Pessoa
    {
        [Display(Name = "Instituição de Ensino")]
        public string InstituicaoEnsino { get; set; }
    }
}