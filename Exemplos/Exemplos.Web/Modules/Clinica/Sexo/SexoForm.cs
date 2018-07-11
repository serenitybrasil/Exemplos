
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.Sexo")]
    [BasedOnRow(typeof(Entities.SexoRow))]
    public class SexoForm
    {        
        public String Sexo { get; set; }        
        public String Abreviatura { get; set; }
    }
}