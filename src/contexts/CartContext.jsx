import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])
    
    const addItem = (product, quantity) => {
        if (!(items.some(item => item.id === product.id))){
            setItems(prev => [...prev, {...product, quantity}])
        } else {
            const itemFromID = items.find(item=>item.id==product.id)
            console.log(itemFromID)
            if(quantity<=product.stock-itemFromID.quantity){
                const updateProducts = items.map(item => {
                    if(item.id===product.id){
                        return {
                            ...item,
                            quantity: item.quantity + quantity,
                        }
                    } else return {...item, quantity: item.quantity}
                })
                setItems(updateProducts)
            } else return alert('Items selected exceed our current stock')  
        }
    }

    const totalWidget = items.reduce((act,val)=> act+val.quantity,0)
    /* const totalWidget = () => {
        if (items.length == 0){
            return []
        } else return items.reduce((act,val)=> act+val.quantity,0)  
    } */
    const removeItem = id => {
    const itemsFiltered = items.filter(item => item.id !== id)
    setItems(itemsFiltered)
    }
    
    const clear = () => setItems([])
    
    return (
    <CartContext.Provider value={{addItem, items, removeItem, clear, totalWidget}}>
        {children}
    </CartContext.Provider>
    )
}