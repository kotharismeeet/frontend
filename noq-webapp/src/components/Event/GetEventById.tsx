import { useParams } from "react-router-dom";
import {Component, ComponentWithoutProps} from '../utils/types';
import {useAxios} from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
import { GetEventVendors } from "./GetEventVendors";

export const GetEventById: Function = ():Component | ComponentWithoutProps => {
    const params: any = useParams();
    const eventId = params.id;
    const {error, response, status}: any  = useAxios("GET",{url:"/event/vendorinevent/"+eventId,body:{}},"");
    if(status !== 200) {
        console.log(error);
        //toastMessage(error);
        return <ToastContainer />
    }
    else return <GetEventVendors vendor={response} />
}