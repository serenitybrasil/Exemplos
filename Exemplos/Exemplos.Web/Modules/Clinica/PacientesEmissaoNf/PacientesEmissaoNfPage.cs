

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/PacientesEmissaoNf", typeof(Exemplos.Clinica.Pages.PacientesEmissaoNfController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/PacientesEmissaoNf"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PacientesEmissaoNfRow))]
    public class PacientesEmissaoNfController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/PacientesEmissaoNf/PacientesEmissaoNfIndex.cshtml");
        }
    }
}