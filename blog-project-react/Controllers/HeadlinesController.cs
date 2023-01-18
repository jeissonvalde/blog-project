using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using blog_project_react.Models;

namespace blog_project_react.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeadlinesController : ControllerBase
    {
        // GET: api/headlines
        [HttpGet]
        public IEnumerable<HeadlineModel> Get()
        {
            List<HeadlineModel> list = new List<HeadlineModel>();

            list.Add(new HeadlineModel());
            list[0].HeadlineId = "VF87MA-0R87";
            list[0].Title = "La Vuelta San Juan";
            list[0].URL = "la-vuelta-san-juan-0j84/VF87MA-0R87";
            list[0].Introduction = "La competencia de ciclismo es ,uno de los deportes más importantes ,en latinoamérica";
            list[0].BgImage = "https://firebasestorage.googleapis.com/v0/b/tech-website-59d72.appspot.com/o/images%2Fblog%2F01%20vuelta%20san%20juan%2Fvuelta%20san%20juan%20(2).png?alt=media&token=3928fdfd-b1ce-40d8-b158-d50bd0d5e735";
            list[0].BgImageAuthor = "#";
            list[0].Alt = "Imagen de portada la vuelta san juan";
            list[0].Meta = "";

            list.Add(new HeadlineModel {
                HeadlineId = "VF8-F89FPJAFV-IAIVF87",
                Title = "Usan una tablet como volante",
                URL = "peugeot-usa-una-tablet-en-lugar-de-un-volante/VF8-F89FPJAFV-IAIVF87",
                Introduction = "Estos son los próximos , vehículos particulares en transitar",
                BgImage = "https://firebasestorage.googleapis.com/v0/b/tech-website-59d72.appspot.com/o/images%2Fblog%2F02%20Peugeot%20Car%2FPeugeot%20Inception%20Concept%2002.png?alt=media&token=e8cfa02e-8486-4331-8f46-dd0953bf67f5",
                BgImageAuthor = "#",
                Alt = "Imagen de vehículo con tablet en volante",
                Meta = ""
            });

            return list;
        }

        // GET api/<HeadlinesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<HeadlinesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<HeadlinesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HeadlinesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
