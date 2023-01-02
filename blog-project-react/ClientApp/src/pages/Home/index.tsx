import React, { Component } from 'react';
import { Blog } from './types';
import {
    BlogsInterval
} from './controllers/animations';
import {
    GlobalEvent
} from '../../utils/events-handle';
import blogsData from '../../assets/blogs'
import './styles/index.css';

interface HomeInterface {
    
}

// Event function check without overapplying or recharging.
const globalEvent = new GlobalEvent();

export class Home extends Component {
    constructor(props: any) {
        super(props)

        this.state = {
            articles: []
        }
    }

    componentDidMount() {

    }

    getArticles = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();

        console.log('data: ', data);
        alert('data ' + JSON.stringify(data));
        this.setState({ articles: [{txt: 'any'}] });
    }
     
    render() {
        let blogs = blogsData as any
        let blogsInterval = new BlogsInterval()
        globalEvent.setEventGlobal({ id: 'home-headline-list-event', handler: blogsInterval.presentation })

        // The first blog has pointer by default
        return (
            <section className="Home page">
                <ul id="home-headline-list">
                    {blogs.map((blg: Blog, idx: number) => {
                        setTimeout(() => {
                            // individual events for li
                        }, 1000)

                        return (
                            <li
                                key={idx}
                                data-url={blg.url}
                                className={blg.className}>

                                {blg.title}
                            </li>
                        );
                    })}

                    <li className="marker">l</li>
                </ul>

                <div className="pub-preview"></div>
            </section>
        );
    }
};