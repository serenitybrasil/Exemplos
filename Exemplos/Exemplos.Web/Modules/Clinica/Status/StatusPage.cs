

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/Status", typeof(Exemplos.Clinica.Pages.StatusController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/Status"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StatusRow))]
    public class StatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/Status/StatusIndex.cshtml");
        }
    }
}