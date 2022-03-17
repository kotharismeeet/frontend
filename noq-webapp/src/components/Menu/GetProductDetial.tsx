import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { ToastContainer } from "react-toastify";
import {MenuDetail} from './MenuDetail'

export const GetProductDetail = () => {
  const params: any = useParams();
  const itemId = params.id;
  const {error, response} = useAxios("GET",{url:"item/"+itemId,body:{}},"");
  if(error) {
      //console.log(error);
      //toastMessage(error);
      return <ToastContainer />
  }
  return <MenuDetail item={response} />
}