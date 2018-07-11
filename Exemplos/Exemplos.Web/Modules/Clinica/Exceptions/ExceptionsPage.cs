

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/Exceptions", typeof(Exemplos.Clinica.Pages.ExceptionsController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/Exceptions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExceptionsRow))]
    public class ExceptionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/Exceptions/ExceptionsIndex.cshtml");
        }
    }
}