import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCounter";
import data from '../data/products.json';
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = (props) => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect(()=> {
        const promise = new Promise((resolve, reject)=>{
        setTimeout(() => resolve(data), 2000);
    });
    promise.then((data) => {
        if(!id){
            setProduct(data) 
        } else {
            const productsFiltered = data.filter(
                (product) => product.category == id
            )
            setProduct(productsFiltered) 
        }
    });
    }, []);
    if(!product) return <div>Loading...</div>
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1vw', alignItems: 'center'}}>
            {props.greeting}
        </div>
        <div style={{ display: 'flex', flexWrap:'wrap'}}>
            <ItemList products={product}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ItemCount/>
        </div>  
        </div>
    );
};
