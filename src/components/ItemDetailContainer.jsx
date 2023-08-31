import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCounter";
import data from '../data/products.json';
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    useEffect(()=> {
        const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            const productById = data.find(product => product.id == id);
            resolve(productById)
        }, 2000);
    });
    promise.then((data) => setProduct(data));
    }, []);

    if(!product) return <div>Loading...</div>

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1vw', alignItems: 'center'}}>
            <h1>DETAILS</h1>
        </div>
        <div style={{ display: 'flex', flexWrap:'wrap'}}>
            <ItemDetail product={product}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ItemCount/>
        </div>  
        </div>
    );
};
