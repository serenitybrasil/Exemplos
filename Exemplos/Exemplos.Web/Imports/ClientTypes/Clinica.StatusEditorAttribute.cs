using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class StatusEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.StatusEditor";

        public StatusEditorAttribute()
            : base(Key)
        {
        }
    }
}

