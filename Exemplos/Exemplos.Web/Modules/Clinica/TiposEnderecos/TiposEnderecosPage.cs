

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/TiposEnderecos", typeof(Exemplos.Clinica.Pages.TiposEnderecosController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/TiposEnderecos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TiposEnderecosRow))]
    public class TiposEnderecosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/TiposEnderecos/TiposEnderecosIndex.cshtml");
        }
    }
}