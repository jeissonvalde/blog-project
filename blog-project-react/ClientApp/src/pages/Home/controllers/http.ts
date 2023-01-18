import { Article } from '../types';
import axios from 'axios';

export async function getHeadlineList (setHeadlinesList: Function) {
    const response = await fetch('/api/headlines')
    const data = await response.json()

    setHeadlinesList(data)
}