

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/TiposMeiosContatos", typeof(Exemplos.Clinica.Pages.TiposMeiosContatosController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/TiposMeiosContatos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TiposMeiosContatosRow))]
    public class TiposMeiosContatosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/TiposMeiosContatos/TiposMeiosContatosIndex.cshtml");
        }
    }
}