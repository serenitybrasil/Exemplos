
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.TiposContatos")]
    [BasedOnRow(typeof(Entities.TiposContatosRow))]
    public class TiposContatosForm
    {        
        public String TipoContato { get; set; }        
        public Boolean PessoaFisica { get; set; }        
        public Int32 Ordem { get; set; }
    }
}