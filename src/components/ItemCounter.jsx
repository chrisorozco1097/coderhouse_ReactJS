import { useState } from "react";

export const ItemCount = ({stock, onAdd}) => {
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
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'50vh', margin: '1vh 0'}} className="itemCount">
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'10vh'}} onClick={handleDecreaseCount}>-</span>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'10vh'}}>{count}</span>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'10vh'}} onClick={handleIncreaseCount}>+</span>
            <button onClick={()=>onAdd(count)}>Add to cart</button>
        </div>
    );
};