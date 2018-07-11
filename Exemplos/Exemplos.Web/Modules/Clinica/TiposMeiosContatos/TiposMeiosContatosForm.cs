
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.TiposMeiosContatos")]
    [BasedOnRow(typeof(Entities.TiposMeiosContatosRow))]
    public class TiposMeiosContatosForm
    {        
        public String TipoMeioContato { get; set; }        
        public String Mascara { get; set; }
    }
}