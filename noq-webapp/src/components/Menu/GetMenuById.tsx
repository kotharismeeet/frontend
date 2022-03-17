import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
import { Menu } from "./Menu";

export const GetMenubyId = () => {
    const params: any = useParams();
    const menuId = params.id;
    const {error, response} = useAxios("GET",{url:"menu/"+menuId,body:{}},"");
    if(error) {
        //console.log(error);
        //toastMessage(error);
        return <ToastContainer />
    }
    else  return <Menu menu={response} />
}