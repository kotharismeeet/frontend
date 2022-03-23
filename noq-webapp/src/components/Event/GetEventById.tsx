import { useParams } from "react-router-dom";
import {Component, ComponentWithoutProps} from '../utils/types';
import {useAxios} from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
import { LandingPage } from "../LandingPage/LandingPage";

export const GetEventById: Function = ():Component | ComponentWithoutProps => {
    const params: any = useParams();
    const eventId = params.id;
    const {error, status}: any  = useAxios("GET",{url:"/event/"+eventId,body:{}},"");
    if(status !== 200) {
        //toastMessage(error);
        return <ToastContainer />
    }
    else return <LandingPage />
}