

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/TiposContatos", typeof(Exemplos.Clinica.Pages.TiposContatosController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/TiposContatos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TiposContatosRow))]
    public class TiposContatosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/TiposContatos/TiposContatosIndex.cshtml");
        }
    }
}