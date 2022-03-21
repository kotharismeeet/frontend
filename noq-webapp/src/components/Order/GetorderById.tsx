import { useParams } from "react-router-dom";
import {useAxios} from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
import { Order } from "./Order";

export const GetOrderById = () => {
    const params: any = useParams();
    const orderId = params.id;
    const {error, response}: any = useAxios("GET",{url:"order/"+orderId,body:{}},"");
    if(error) {
        //console.log(error);
        //toastMessage(error);
        return <ToastContainer />
    }
    return <Order order={response}/>
}