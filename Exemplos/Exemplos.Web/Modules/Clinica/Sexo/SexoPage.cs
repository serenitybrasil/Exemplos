

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/Sexo", typeof(Exemplos.Clinica.Pages.SexoController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/Sexo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SexoRow))]
    public class SexoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/Sexo/SexoIndex.cshtml");
        }
    }
}