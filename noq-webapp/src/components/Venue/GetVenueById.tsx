import { useParams } from "react-router-dom";
import {useAxios} from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
import { Venue } from "./Venue";

export const GetVenueById = () => {
    const params: any = useParams();
    const venueId = params.id;
    const {error, response}:any = useAxios("GET",{url:"venue/"+venueId,body:{}},"");
    if(error) {
        //console.log(error);
        //toastMessage(error);
        return <ToastContainer />
    }
    else return <Venue venue={response}/>
}