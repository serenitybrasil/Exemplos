

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/EstadosCivis", typeof(Exemplos.Clinica.Pages.EstadosCivisController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/EstadosCivis"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EstadosCivisRow))]
    public class EstadosCivisController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/EstadosCivis/EstadosCivisIndex.cshtml");
        }
    }
}