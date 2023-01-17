import { ArticleData } from '../types';

export function getArticleById(id: string | undefined, setArticle: Function) {
    fetch('article/' + id)
        .then((data) => {
            console.log(data)

            setArticle(data)
        })
}