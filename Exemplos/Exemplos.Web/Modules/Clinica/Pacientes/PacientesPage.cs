

////[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/Pacientes", typeof(Exemplos.Clinica.Pages.PacientesController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/Pacientes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PacientesRow))]
    public class PacientesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/Pacientes/PacientesIndex.cshtml");
        }
    }
}