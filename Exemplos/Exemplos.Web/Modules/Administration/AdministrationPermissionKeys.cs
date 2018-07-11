
using Serenity.Extensibility;
using System.ComponentModel;

namespace Exemplos.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        public class Clinica
        {
            
            public class Pacientes
            {
                public const string Read = "Clinica:Pacientes:Read";
                public const string Insert = "Clinica:Pacientes:Insert";
                public const string Update = "Clinica:Pacientes:Update";
                public const string Delete = "Clinica:Pacientes:Delete";
            }
        }
    }
}
