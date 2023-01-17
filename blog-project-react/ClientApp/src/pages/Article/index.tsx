import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sheet from './components/sheet';
import { ArticleData } from './types';
import { clickGoBack } from './controllers/header';
import { getArticleById } from './controllers/http';
import './styles/index.css';

function Publication () {
    const { id } = useParams()
    const [ articleData, setArticle ] = useState()

    useEffect(() => {
        console.log('useEffect', articleData)
    }, [ articleData ])

    getArticleById(id, setArticle)

    return (
        <div className="Article page">
            {articleData
                ? <Sheet
                    clickGoBack={clickGoBack}
                    articleData={articleData} />
                    
                : <div className="spinner-bg">
                    <label>Por favor espera</label>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            }
        </div>
    )
};

export default Publication;