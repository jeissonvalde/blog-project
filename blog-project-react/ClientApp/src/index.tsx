import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import reportWebVitals from './utils/reportWebVitals';

const baseURLElem = document.getElementsByTagName('base') as HTMLCollectionOf<HTMLElement>;
let baseUrl = baseURLElem[0] ? baseURLElem[0].getAttribute('href') as string : '/';

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
