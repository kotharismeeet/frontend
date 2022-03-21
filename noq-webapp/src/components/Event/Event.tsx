import React, { useState, useEffect } from 'react';
import {Loader} from '../utils/Loader';

export const Event = ({event}:any) => {

    const [loaded,setloaded] = useState(false);
    useEffect(()=>{
        if(event.data !== undefined) {
            setloaded(true);
        }
        //6229d6782c07532108576029
        //console.log('it just got changed!',event);
    },[event]);
    
    return (<div>
        {loaded? <div>Event</div> : <Loader />}
    </div>);
};