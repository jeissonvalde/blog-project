// Dependencies
import {
  useState,
  useEffect,
  useReducer
} from 'react';
import { ArticleListData } from '../../assets/blogs';
import setEvent from '../../utils/events-handle';
import { presentation } from './controllers/animations';
import { navigate } from '../../components/bar-navigation/controllers'
import {
    Headlines,
    PreviewImages
} from './components'
import './styles/index.css';

// Global props
const livingEv = new setEvent.LivingEvent()

// Page container
export default function Home () {
    const [ redirect, setRedirect ] = useState(),
      [ mainInterval, setMainInterval ] = useState(),
      [ articleList, setArticleList ] = useState(ArticleListData)

    useEffect(() => {
      // Navigation
      if (redirect) {
        setTimeout(() => {
          console.log('despues de 2s', redirect)
        }, 2000)
        console.log('useEffect redirect: ', redirect)
      }
    }, [ redirect, articleList ])

    // Handlers
    livingEv.setEventGlobal({
      id: 'home-headline-list-event',
      handler: presentation.bind(null, { setMainInterval }),
      noKillId: true,
    })
    const navigateTo = navigate.bind(null, setRedirect)


    // JSX
    return (
        <section className="Home page">      
          {/* Headlines */}
          <Headlines 
              articleList={ArticleListData}/>

          {/* Articles preview */}
          <PreviewImages
              navigateTo={navigateTo}
              articleList={articleList}/>
        </section>
    )
}