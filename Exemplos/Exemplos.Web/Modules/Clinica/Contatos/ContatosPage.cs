

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/Contatos", typeof(Exemplos.Clinica.Pages.ContatosController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/Contatos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ContatosRow))]
    public class ContatosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/Contatos/ContatosIndex.cshtml");
        }
    }
}