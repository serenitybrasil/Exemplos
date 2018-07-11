using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class LotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.LotesEditor";

        public LotesEditorAttribute()
            : base(Key)
        {
        }
    }
}

