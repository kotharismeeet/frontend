import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {buttonWithLinksProps} from './types';
import './CustomButton.scss';

export const CustomButtonWithLink = (props: buttonWithLinksProps) => {    
  return (<>
     <Link to={props.prefix + props.id}><Button className="button">{props.label}</Button></Link>
    </>);
};