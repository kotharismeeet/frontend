import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
import { Event } from "./Event";

export const GetEventById = () => {
    const params: any = useParams();
    const eventId = params.id;
    const {error, response} = useAxios("GET",{url:"event/"+eventId,body:{}},"");
    if(error) {
        //console.log(error);
        //toastMessage(error);
        return <ToastContainer />
    }
    else return <Event event={response} />
}