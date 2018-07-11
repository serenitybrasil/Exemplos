
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.Status")]
    [BasedOnRow(typeof(Entities.StatusRow))]
    public class StatusForm
    {        
        public String Status { get; set; }
    }
}