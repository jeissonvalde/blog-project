import { Article } from '../types';
import axios from 'axios';

export async function getHeadlineList (setHeadlinesList: Function) {
    return null
    const response = await fetch('headlines')
    // const response = await fetch('https://localhost:7224/headlines')
    // console.log('http > titulares > response')
    console.log('http > titulares > response', response)

    const data = await response.json()
    // const data_2 = await JSON.stringify(response)
    // console.log('http > titulares > data', data_2)
    console.log('http > titulares > data', data)

    //setHeadlinesList(data)
    
    /*
    const configAxios = {
        // url: '/user',
        baseURL: 'https://192.168.20.47:7224',
        timeout: 4000,
        // headers: {'X-Requested-With': 'XMLHttpRequest'},
        // proxy: {
        //     protocol: 'https',
        //     host: '192.168.20.47',
        //     port: 7224,
        //     auth: {
        //     username: 'mikeymike',
        //     password: 'rapunz3l'
        //     }
        // }
    }
    const axiosConn = axios.create(configAxios);
    axiosConn.get('/headlines')


    // axios.get('/user?ID=12345')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     }) */
}