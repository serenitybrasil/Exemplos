﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos.Clinica
{
    public partial class StatusLotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Exemplos.Clinica.StatusLotesEditor";

        public StatusLotesEditorAttribute()
            : base(Key)
        {
        }
    }
}

