

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/Convenios", typeof(Exemplos.Clinica.Pages.ConveniosController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/Convenios"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ConveniosRow))]
    public class ConveniosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/Convenios/ConveniosIndex.cshtml");
        }
    }
}