import {useState,useEffect} from 'react';
import axios from 'axios';
import { payloadParams } from '../utils/types';

export const useAxios = (method: string, payload: payloadParams, queries: string) => {
    
    const [status, setStatus] = useState(200);
    const [response,setResponse] = useState({});
    const [error,setError] = useState({});
    const BACKEND_SERVER = "http://localhost:8080/api";
    let apiURL = queries !== "" ? BACKEND_SERVER + payload.url + queries : BACKEND_SERVER + payload.url;
    //console.log(apiURL);
    const axiosCall = async () => {
        switch(method) {
            case "GET":
                try {
                    const res: any = await axios.get(apiURL);
                    if(res.status===200) {
                        setResponse(res);
                        setStatus(200);
                    }
                    else {
                        setStatus(res.status);
                        setError(res);
                    }
                } catch (err) {
                    setStatus(500);
                    console.log(err);
                }
                break;
            case "POST":
                try {
                    const res: any = await axios.post(apiURL,payload.body);
                    if(res.status===200) {
                        setResponse(res);
                        setStatus(200);
                    }
                    else {
                        setStatus(res.status);
                        setError(res);
                    }
                } catch (err) {
                    setStatus(500);
                    console.log(err);
                }
                break;
        }
    }

    useEffect(()=>{
        console.log('componentDidMount');
        axiosCall();
        return () => {
            console.log('componentDidUnmount');
            setStatus(200);
            setError({});
            setResponse({});
        }
    },[])
    return {response,error,status};
}
