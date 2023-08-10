import logo from "../assets/cart.png";
import Image from 'react-bootstrap/Image';

export const CartWidget = () => { 
    return (
        <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height:'10vh'}}>
            <Image src={logo} alt="CartW" fluid style={{height:'10vh'}}/>  
        </div>      
    );
}
