using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Clinica
        {
            public static class Contatos
            {
                public const string ContatosIndex = "~/Modules/Clinica/Contatos/ContatosIndex.cshtml";
            }

            public static class Convenios
            {
                public const string ConveniosIndex = "~/Modules/Clinica/Convenios/ConveniosIndex.cshtml";
            }

            public static class EstadosCivis
            {
                public const string EstadosCivisIndex = "~/Modules/Clinica/EstadosCivis/EstadosCivisIndex.cshtml";
            }

            public static class Exceptions
            {
                public const string ExceptionsIndex = "~/Modules/Clinica/Exceptions/ExceptionsIndex.cshtml";
            }

            public static class Fornecedores
            {
                public const string FornecedoresIndex = "~/Modules/Clinica/Fornecedores/FornecedoresIndex.cshtml";
            }

            public static class Pacientes
            {
                public const string PacientesIndex = "~/Modules/Clinica/Pacientes/PacientesIndex.cshtml";
                public static class Print
                {
                    public const string PacientesPrint = "~/Modules/Clinica/Pacientes/Print/PacientesPrint.cshtml";
                }
            }

            public static class PacientesConvenios
            {
                public const string PacientesConveniosIndex = "~/Modules/Clinica/PacientesConvenios/PacientesConveniosIndex.cshtml";
            }

            public static class PacientesEmissaoNf
            {
                public const string PacientesEmissaoNfIndex = "~/Modules/Clinica/PacientesEmissaoNf/PacientesEmissaoNfIndex.cshtml";
            }

            public static class Sexo
            {
                public const string SexoIndex = "~/Modules/Clinica/Sexo/SexoIndex.cshtml";
            }

            public static class Status
            {
                public const string StatusIndex = "~/Modules/Clinica/Status/StatusIndex.cshtml";
            }

            public static class TiposContatos
            {
                public const string TiposContatosIndex = "~/Modules/Clinica/TiposContatos/TiposContatosIndex.cshtml";
            }

            public static class TiposEnderecos
            {
                public const string TiposEnderecosIndex = "~/Modules/Clinica/TiposEnderecos/TiposEnderecosIndex.cshtml";
            }

            public static class TiposMeiosContatos
            {
                public const string TiposMeiosContatosIndex = "~/Modules/Clinica/TiposMeiosContatos/TiposMeiosContatosIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

