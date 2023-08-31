import { useState } from "react";
const stock = 5;

export const ItemCount = () => {
    const [count, setCount] = useState(1);
    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1);
        }
    }
    const handleDecreaseCount = () => {
        if (count >= 1) {
            setCount((prev) => prev - 1);
        }
    }
    const handleAdd= () => {
        if(count == 0){
            alert('No items selected');
        }
        else{
            alert('Your added ' + count + ' Items to your cart');
        }
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'50vh'}} className="itemCount">
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'10vh'}} onClick={handleDecreaseCount}>-</span>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'10vh'}}>{count}</span>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'10vh'}} onClick={handleIncreaseCount}>+</span>
            <button onClick={handleAdd}>Add to cart</button>
        </div>
    );
};