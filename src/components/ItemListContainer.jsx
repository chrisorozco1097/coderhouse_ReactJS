import { useState, useEffect } from "react";
//import data from '../data/products.json';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = (props) => {
    //const db = getFirestore();
    const [product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(1)
    const {id} = useParams();
    useEffect(()=>{
        const db = getFirestore()
        const refCollection = collection(db, "Board games")

        getDocs(refCollection).then(snapshot => {
            const data = snapshot.docs.map(doc => {return {id: doc.id, ... doc.data()}});
            if(snapshot.size ===0) console.log("No results")
            else {
                if(!id){
                    setProduct(data) 
                } else {
                    const productsFiltered = data.filter(
                        (product) => product.category == id
                    )
                    setProduct(productsFiltered) 
                }
        }
    })
        .finally(()=> {
            setLoading(false)
        });
        }, [id]);
    if(Loading) return <div>Loading...</div>
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10vh'}}>
        <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'center', alignItems: 'right'}}>
            <ItemList products={product}/>
        </div> 
        </div>
    );
};
