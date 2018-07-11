

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Clinica/Fornecedores", typeof(Exemplos.Clinica.Pages.FornecedoresController))]

namespace Exemplos.Clinica.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Clinica/Fornecedores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FornecedoresRow))]
    public class FornecedoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Clinica/Fornecedores/FornecedoresIndex.cshtml");
        }
    }
}