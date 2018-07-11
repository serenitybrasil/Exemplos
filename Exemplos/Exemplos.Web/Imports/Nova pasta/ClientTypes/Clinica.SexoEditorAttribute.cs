using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class SexoEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.SexoEditor";

        public SexoEditorAttribute()
            : base(Key)
        {
        }
    }
}

