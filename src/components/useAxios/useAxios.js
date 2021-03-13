import {useState, useEffect} from 'react';
import axios from 'axios';

export const useAxios = (url) => {
    const [state, setState] = useState({ data: null, loading: true});
    const options = {
      method: "GET",
      url: url
    };

    useEffect(()=> {
        setState(state => ({data: state.data, loading: true}))
        axios(options)
        .then(x => x.text)
        .then(y => {
            setState({data: y, loading: false});
        });
    }, [url]);

    return state

}
