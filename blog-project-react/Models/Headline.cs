namespace blog_project_react.Models
{
    public class HeadlineModel
    {
        public string HeadlineId { get; set; }

        public string Title { get; set; }

        public string? URL { get; set; }

        public string? Introduction { get; set; }

        public string? BgImage { get; set; }

        public string? BgImageAuthor { get; set; }

        public string? Alt { get; set; }

        public string? Meta { get; set; }

        public DateTime? CreatedAt { get; set; }

        // public HeadlineModel (
        //     string Title,
        //     string URL,
        //     string HeadlineId,
        //     string Introduction,
        //     string BgImage,
        //     string BgImageAuthor,
        //     string Alt,
        //     string Meta,
        //     DateTime CreatedAt
        //     ) {
                
        //         this.HeadlineId = HeadlineId;
        //         this.Title = Title;
        //         this.URL = URL;
        //         this.Introduction = Introduction;
        //         this.BgImage = BgImage;
        //         this.BgImageAuthor = BgImageAuthor;
        //         this.Alt = Alt;
        //         this.Meta = Meta;
        //         this.CreatedAt = CreatedAt;
        //     }
    }
}