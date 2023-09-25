import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = (props) => {
    /* const [product, setProduct] = useState(null);
    const {id} = useParams();
    const data = snapshot.docs.map(doc => {return {id: doc.id, ... doc.data()}});
    useEffect(()=> {
        const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            const productById = data.find(product => product.id == id);
            resolve(productById)
        }, 2000);
    });
    promise.then((data) => setProduct(data));
    }, [id]); */

    const db = getFirestore();
    const [product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(1)
    const {id} = useParams();
    useEffect(()=>{
        const db = getFirestore()
        const refCollection = collection(db, "Board games")

        getDocs(refCollection).then(snapshot => {
            const data = snapshot.docs.map(doc => {return {id: doc.id, ... doc.data()}});
            const productById = data.find(product => product.id == id);
            setProduct(productById)
    })
        .finally(()=> {
            setLoading(false)
        });
        }, [id]);
    if(Loading) return <div>Loading...</div>


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <ItemDetail product={product}/>
        </div>
    );
};
