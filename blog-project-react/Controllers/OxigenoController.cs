using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace blog_project_react.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OxigenoController : ControllerBase
    {
        // GET: api/<OxigenoController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<OxigenoController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<OxigenoController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<OxigenoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OxigenoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}