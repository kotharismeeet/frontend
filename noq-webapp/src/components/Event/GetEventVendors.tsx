import {useState, useEffect} from 'react';
import { MyLoader } from '../utils/ContentLoader';
import {Navbar} from '../Navbar/Navbar';
import { useAxios } from '../hooks/useAxios';
import './Event.scss';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const GetEventVendors = () => {
    const [loaded,setloaded] = useState(false);
    const [vendors,setVendors] = useState([]);
    const eventId = window.location.toString().split('/')[4];
    const {response,error,status}: any = useAxios("GET",{url:"/event/vendorinevent/"+eventId,body:{}},"");
    
    const getVendors = () => {
        if(status !== 200) {
            console.error(error);
        }
        else { if(Object.keys(response).length) {
                setVendors(response.data[0].vendorDetails);
                setloaded(true);
            }
        }
        //http://localhost:3000/events/623957c7204b20f8a2d7da83/vendors
    }

    useEffect(()=>{
        console.log('componentDidMount');
        getVendors();
        // return () => {
        //     console.log('componentDidUnmount');
        //     setloaded(false);
        //     setVendors([]);
        // }
    },[response]);
    
    return (<div>
        <div 
            // initial={{y: -130}}
            // animate={{ y: 0}}
            // transition={{delay: 0.5, duration: 1}}
        ><Navbar label={"Vendors"}/></div>
        <div>
            { !loaded ?
                <div className='mt-20'>
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                </div> :
                vendors.map((vendor: any)=>{
                    return <StyledLink to={`/menu/${vendor._id}`}><div key={vendor._id} className='block'>
                         <div className='flex-row'
                            // initial={{x: -425}}
                            // animate={{ x: 0}}
                            // transition={{delay: 0.5, duration: 1}} 
                         >
                            <div className="flex-col">
                                <div className='flex-start'><h3>{vendor.display_name}</h3></div>
                                <div className='flex-start'><small>{vendor.description}</small></div>
                            </div>
                            <div className='flex-col'>
                                <div className='flex-end'><h4 className='primary-color'>Open</h4></div>
                                <div className='flex-end'><small className='primary-color'>Estimated Time in 30 mins</small></div>
                            </div>
                        </div>
                    </div></StyledLink>
                })    
            }
        </div>
    </div>);
};
