
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.Contatos")]
    [BasedOnRow(typeof(Entities.ContatosRow))]
    public class ContatosForm
    {
        //public Int32 PacienteId { get; set; }
        //public Int32 ConvenioId { get; set; }
        //public Int32 ProfissionalId { get; set; }
        public String Tratamento { get; set; }
        public String Nome { get; set; }
        public String Departamento { get; set; }
        public Int32 TipoContatoId { get; set; }
        public Int32 TipoMeioContatoId { get; set; }
        [MaskedEditor(Mask = "")]
        public String ConteudoMeioContato { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String ObservacoesContato { get; set; }
    }
}