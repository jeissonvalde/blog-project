namespace blog_project_api.Models
{
    public class Article
    {
        public string id { get; set; }
        public string content { get; set; }
        public DateTime createdAt { get; set; }
        public object bgImage { get; set; }
    }
}
