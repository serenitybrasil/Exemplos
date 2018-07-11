using Serenity.Navigation;
//using Northwind = Exemplos.Northwind.Pages;
//using Clinica = Exemplos.Clinica.Pages;
using Administration = Exemplos.Administration.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]


[assembly: NavigationMenu(2000, "Pacientes", icon: "icon-people")]
[assembly: NavigationLink(2001, "Pacientes/Pacientes", typeof(Exemplos.Clinica.Pages.PacientesController), icon: "icon-user")]


[assembly: NavigationMenu(3000, "Fornecedores", icon: "icon-settings")]
[assembly: NavigationLink(3001, "Fornecedores/Fornecedores", typeof(Exemplos.Clinica.Pages.FornecedoresController), icon: "fa-coffee")]

    [assembly: NavigationMenu(3000, "Configuração", icon: "icon-settings")]
[assembly: NavigationLink(3006, "Configuração/Estados Civis", typeof(Exemplos.Clinica.Pages.EstadosCivisController), icon: "fa-cogs")]
[assembly: NavigationLink(3008, "Configuração/Sexo", typeof(Exemplos.Clinica.Pages.SexoController), icon: "fa-mars")]
[assembly: NavigationLink(3022, "Configuração/Status", typeof(Exemplos.Clinica.Pages.StatusController), icon: "fa-cogs")]
