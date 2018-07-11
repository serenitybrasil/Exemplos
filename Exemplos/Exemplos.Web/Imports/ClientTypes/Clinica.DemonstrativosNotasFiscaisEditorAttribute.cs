using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class DemonstrativosNotasFiscaisEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.DemonstrativosNotasFiscaisEditor";

        public DemonstrativosNotasFiscaisEditorAttribute()
            : base(Key)
        {
        }
    }
}

