
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.EstadosCivis")]
    [BasedOnRow(typeof(Entities.EstadosCivisRow))]
    public class EstadosCivisForm
    {        
        public String Descricao { get; set; }
    }
}