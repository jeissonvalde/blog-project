import {
  Link,
} from 'react-router-dom';
import {
  Article
} from '../types';
import { PreviewIntro } from './preview-intro';
import {
  loadImage
} from '../controllers/image';
import {
  clickPreview,
} from '../controllers/preview';
import images from '../../../assets/images.json';

export function PreviewImages (props: Props) {
  const {
    articleList,
    navigateTo
  } = props

  return (
    <div className="pub-preview">
      <div id="pub-preview-images">

        {articleList.map((articleData, idx: number) => {
          let previewId = 'img-preview-' + articleData.id

          return (
            <div
              key={idx}
              id={previewId}
              className={`article-image ${idx == 0 ? 'bring-the-picture-here' : ''}`}>


              <div
                onClick={navigateTo.bind(null, 'art/' + articleData.url)}
                className="button-go-to-article" data-id-article={articleData.id}>
              </div>

              <div className="article-image-effect">
                <PreviewIntro
                  handleClickPreviewArticle={navigateTo.bind(null, 'art/' + articleData.url)}
                  blg={articleData} />
              </div>

              <a className="author external-link" target="_blank" href={articleData.bgImageAuthor}>Autor <img src={images.icons.external} /></a>
              <img
                onLoad={loadImage.bind(null, previewId)}
                src={articleData.bgImage}
                alt={articleData.alt} />
            </div>
          )
        })}

      </div>
    </div>
  )
}

type Props = {
  articleList: Article[],
  navigateTo: Function
}