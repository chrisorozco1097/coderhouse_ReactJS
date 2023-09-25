import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cart.png";
import Image from 'react-bootstrap/Image';
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => { 
    const {totalWidget} = useContext(CartContext)
    if(totalWidget!==0){
            return (
                <Link to="/cart" style={{textDecoration: 'none' }} >
                    <Image src={logo} alt="CartW" fluid style={{height:'5vh'}}/> <span >{totalWidget}</span>
                </Link> 
            )
    }  
}
