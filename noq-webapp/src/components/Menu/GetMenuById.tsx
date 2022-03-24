import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
// import { MenuNavbar } from "./Menu";
import { Navbar } from "../Navbar/Navbar";
import { MyLoader } from '../utils/ContentLoader';
import './Menu.scss';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        color: #000;
        text-decoration: none;
    }
`;

export const GetMenubyId = () => {
    const params: any = useParams();
    const vendorId = params.id;
    const {error, response, status}: any = useAxios("GET",{url:"/item/vendor/"+vendorId,body:{}},"");
    const [loaded,setLoaded]=useState(true);
    const [items,setItems]=useState([]);
    const [categoryNames,setCategoryNames]: any=useState([]);

    const getCategoryNames = () => {
        items.map((item :any) => {
            /*if(!items.includes(item.name[0]))*/ return setCategoryNames((prevCategoryNames: []) => [...prevCategoryNames, item.name[0]]);
            // else return; 
        });
    }

    useEffect(()=>{
        // console.log('componentDidUpdate by response');
        // console.log(menu);
        if(Object.keys(response).length) {
            // console.log(response.data.itemsByCategory);
            setItems(response.data.itemsByCategory);
            setLoaded(true);
            getCategoryNames();
            console.log(categoryNames);
        }
    },[response]);

    if(status !== 200) {
        console.log(error);
        //toastMessage(error);
        return <ToastContainer />
    }
    else  return (
        <div>
            <Navbar label={"Menu"}/>
            {!loaded ?
            <div>
                <MyLoader />
                <MyLoader />
                <MyLoader />
            </div>:
            <div className="base-menu">
                {items.map((item: any) => {
                    return <div>
                        <h2 className="category-name" id={`#${item.name[0]}`}>{item.name[0]}</h2>
                        {item.menuItems.map( (i: any) => {
                            return <StyledLink to={`/product-detail/${i._id}`}><div key={i._id} className='flex-col'>
                                <div>{i.item}</div>
                                <p className="tertiary-color">description</p>
                                <div>
                                    <span className="secondary-color">{i.price}</span>,
                                    <span className="primary-color">veg</span>
                                </div>
                            </div></StyledLink>
                        })}
                    </div>
                })}
            </div>}
        </div>
    );
}