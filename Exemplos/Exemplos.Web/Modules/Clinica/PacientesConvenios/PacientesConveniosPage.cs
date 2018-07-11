

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/PacientesConvenios", typeof(Exemplos.Clinica.Pages.PacientesConveniosController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/PacientesConvenios"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PacientesConveniosRow))]
    public class PacientesConveniosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/PacientesConvenios/PacientesConveniosIndex.cshtml");
        }
    }
}