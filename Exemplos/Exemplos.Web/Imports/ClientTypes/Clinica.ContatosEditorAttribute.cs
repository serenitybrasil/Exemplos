using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class ContatosEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.ContatosEditor";

        public ContatosEditorAttribute()
            : base(Key)
        {
        }
    }
}

