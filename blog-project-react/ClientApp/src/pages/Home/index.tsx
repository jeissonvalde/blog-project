// Dependencies
import {
  useState,
  useEffect,
  useReducer
} from 'react';
import { Navigate } from 'react-router-dom';
import setEvent from '../../utils/events-handle';
import { presentation } from './controllers/animations';
import { navigate } from '../../components/bar-navigation/controllers';
import { Headlines, PreviewImages } from './components'
import { getHeadlineList } from './controllers/http';
import './styles/index.css';

// Global props
const livingEv = new setEvent.LivingEvent()

// Page container
export default function Home () {
    const [ redirect, setRedirect ] = useState(),
      [ mainInterval, setMainInterval ] = useState(),
      [ articleList, setArticleList ] = useState()

    useEffect(() => {
    }, [ redirect, articleList ])

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

    // Server
    if (!articleList) {
      getHeadlineList(setArticleList)
    }

    // JSX
    return (
        <section className="Home page">      
          {/* Headlines */}
          {articleList
              ? <>
                  <Headlines 
                    articleList={articleList}/>
                  <PreviewImages
                      navigateTo={navigateTo}
                      articleList={articleList}/>
                </>
              : <div className="spinner-bg">
                  <label>Por favor espera</label>
                  <div className="progress">
                      <div className="indeterminate"></div>
                  </div>
              </div>
          }

        </section>
    )
}