using System;
using System.Reflection;
using Serenity.ComponentModel;
using System.Collections;


namespace Exemplos
{
    public class LookupCodeDescrAttribute : LKCodeDescrAttribute
    {
        //EXEMPLO DE USO
        //ANTIGO: [LookupEditor(typeof(Projeto.Entities.StatusRow), InplaceAdd = true)]
        //NOVO: [LookupCodeDescrAttribute(typeof(Projeto.Entities.StatusRow), "StatusId", "Status")]

        public LookupCodeDescrAttribute(Type lookupType, String codeFieldName, String descriptionFieldName)
        {
            if (lookupType == null)
                throw new ArgumentNullException("lookupType");

            var attr = lookupType.GetCustomAttribute<LookupScriptAttribute>(false);
            if (attr == null)
            {
                throw new ArgumentException(String.Format(
                    "'{0}' type doesn't have a [LookupScript] attribute, so it can't " +
                    "be used with a LookupEditor!",
                    lookupType.FullName), "lookupType");
            }

            SetOption("lookupKey", attr.Key);

            base.CodeName = codeFieldName;
            base.DescrName = descriptionFieldName;
        }
    }
}