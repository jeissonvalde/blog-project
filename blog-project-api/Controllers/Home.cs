using Microsoft.AspNetCore.Mvc;
using blog_project_api.Models;

namespace blog_project_api.Controllers
{
    [ApiController]
    [Route("home")]
    public class HomeController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet]
        [Route("articulo")]
        public dynamic getArticleById()
        {
            return new
            {
                title = "Messi"
            };
        }

        [HttpGet]
        [Route("articles")]
        public dynamic getArticles()
        {
            List<Article> articles = new List<Article>
        {
            new Article
            {
                id = "as09aj332",
                content = "Esta es el artículo.",
                createdAt = new DateTime(),
                bgImage = "some-url"
            }
        };

            return articles;
        }
    }
}
