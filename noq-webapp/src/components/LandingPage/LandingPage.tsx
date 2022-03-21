import React,{useState, useEffect} from 'react';
import {CustomButtonWithLink} from '../utils/CustomButton';
import '../utils/CustomButton.scss';
//import logo from '../static';


export const LandingPage: Function = () => {

    const [prefix,setPrefix]=useState('');
    const [id,setId]=useState('');

    const getNextUrl: Function = (): void => {
        setPrefix(window.location.toString().split('/')[3]);
        setId(window.location.toString().split('/')[4]);        
    }

    useEffect(()=>{
        console.log('componentDidMount');
        getNextUrl();
    },[]);

    return (<div className='flex-col'>
      <div>
        <h1><b>Welcome to {prefix}</b></h1>  
        <h3>Event / Venue Name</h3>
      </div>

      <div className='flex-col'>
        <h5><b>Access Menu</b></h5>
        <small>Get the app to access discount and loyalty schemes</small>
        <CustomButtonWithLink prefix={prefix} id={id} label="Open in App" />
        <CustomButtonWithLink  prefix={prefix} id={id} label="Continue on this Browser" />
        <small>Powered by</small>
        {/*<img src={logo} />*/}
      </div>

  </div>)
}