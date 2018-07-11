using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class PacientesEmissaoNfEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.PacientesEmissaoNfEditor";

        public PacientesEmissaoNfEditorAttribute()
            : base(Key)
        {
        }
    }
}

