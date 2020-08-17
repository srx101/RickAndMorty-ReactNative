import { useState, useEffect } from 'react';
import RickAndMorty from '../api/RickAndMorty';

export default () => {

const [results, setResults] = useState([]);
const [errorMsg, setErrorMsg] = useState('');

const searchAPI = async() => {
    // console.log('hello there!');
    try {
        const response = await RickAndMorty.get('/character');
        setResults(response.data.results);
        //console.log(response.data.results);
    } catch (e) {
        setErrorMsg('Algo falló intenta de nuevo :(')
    }
};

useEffect(() => {
    searchAPI();
}, [])



return [searchAPI, results, errorMsg];
};