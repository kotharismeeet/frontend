import {useState, useEffect} from 'react';
import { Loader } from '../utils/Loader';
import { vendorObj } from '../utils/types';
import '../utils/index.scss';

export const GetEventVendors = ({vendor}: any) => {
    const [loaded,setloaded] = useState(false);
    const [vendors,setVendors] = useState([]);
    useEffect(()=>{
        if(vendor.data !== undefined) {
            setloaded(true);
            setVendors(vendor.data.vendorDetails);
        }
        //6229d6782c07532108576029
        console.log('it just got changed!',vendors);
    },[vendor]);
    
    return (<div className='flex-col'>
        { !loaded || vendors.length ?
            <Loader /> :
            vendors.map((v: vendorObj)=>{
                return <p key={v._id}>{v.restauarant_official_name}</p>
            })    
        }
    </div>);
};
