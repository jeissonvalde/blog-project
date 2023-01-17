import { Article } from '../types';
import { clickHeadline } from '../controllers/headlines';

export function Headlines (props: Props) {
  const {
    articleList
  } = props

  setTimeout(() => {
    const headlinelistElem = document.getElementById('home-headline-list')
    const headlinelistItemsElem = headlinelistElem?.getElementsByTagName('li') as HTMLCollectionOf<HTMLElement>

    for (let jdx = 0; jdx < headlinelistItemsElem.length; jdx++) {
      const li = headlinelistItemsElem[jdx]
      li.setAttribute('style', '--i:' + jdx)
    }
  }, 1000)

  return (
    <ul id="home-headline-list">

      {articleList.map((articleData, idx) => {
        let liId = articleData.id

        return (
          <li
            key={idx}
            data-idx={idx}
            data-url={articleData.url}
            data-blg-id={articleData.id}
            id={liId}
            onClick={clickHeadline.bind(null, articleData.id)}
            className={`headline ${idx == 0 ? 'pointer' : ''}`}>

            {articleData.title}
          </li>
        )
      })}

      <li className="marker">&nbsp;</li>
    </ul>
  )
}

interface Props {
  articleList: Article[],
}