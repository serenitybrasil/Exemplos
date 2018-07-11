using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class FornecedoresEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.FornecedoresEditor";

        public FornecedoresEditorAttribute()
            : base(Key)
        {
        }
    }
}

