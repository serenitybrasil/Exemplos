using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Exemplos
{
    public partial class LKCodeDescrAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "Exemplos.LKCodeDescr";

        public LKCodeDescrAttribute()
            : base(Key)
        {
        }

        public String CodeName
        {
            get { return GetOption<String>("codeName"); }
            set { SetOption("codeName", value); }
        }

        public String DescrName
        {
            get { return GetOption<String>("descrName"); }
            set { SetOption("descrName", value); }
        }
    }
}

