// Dependencies
import {
  useState,
  useEffect,
  useReducer
} from 'react';
import {
  Navigate
} from 'react-router-dom';
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

    useEffect(() => {}, [ redirect, articleList ])

    // Handlers
    livingEv.setEventGlobal({
      id: 'home-headline-list-event',
      handler: presentation.bind(null, { setMainInterval }),
      noKillId: true,
    })
    
    // Navigation
    const navigateTo = navigate.bind(null, setRedirect)
    if (redirect != null) {
      return <Navigate to={redirect} />
    }


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