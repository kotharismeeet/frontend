import {useState} from 'react';
import axios from 'axios';
import { payloadParams } from '../utils/types';

export default function useAxios(method: string, payload: payloadParams, queries: string) {

  const [response,setResponse] = useState({});
  const [error,setError] = useState({});

    switch(method) {
        case "GET":
            try {
                const res: any = axios.get(payload.url+queries,payload.body);
                if(res.status===200) setResponse(res);
                else setError(res);
            } catch (err) {
                console.log(err);
            }
            break;
        case "POST":
            try {
                const res: any = axios.post(payload.url+queries,payload.body);
                if(res.status===200) setResponse(res);
                else setError(res);
            } catch (err) {
                console.log(err);
            }
            break;
    }

    return {response,error};
}
