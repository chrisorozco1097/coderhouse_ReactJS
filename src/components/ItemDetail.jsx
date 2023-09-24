import { useContext } from "react";
import { ItemCount } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext"

export const ItemDetail = ({product})=> {
    const { addItem } = useContext(CartContext)
    const onAdd = count => addItem(product,count)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>{product.name}</h1> 
            <img src={product.image} style={{ width: '25rem', margin: '2vh 2vw' }}/>
            <div style={{margin: '1vh 0vh'}}>{product.competitiveness}</div>
            <div style={{margin: '1vh 0vh'}}>{product.price}</div>
            <ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
    )
}
    