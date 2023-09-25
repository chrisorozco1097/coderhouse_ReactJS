import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import { useContext, useState } from "react";
import { Container, FormGroup, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

export const Cart = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })
    
    const {clear, items, removeItem} = useContext(CartContext)
    const total= () =>
        items.reduce(
            (accumulator, currentValue) =>
                accumulator + currentValue.quantity*currentValue.price,0
        )
    
    const handleChange = ev => {
        setFormValues(prev => ({
            
        }))
    }

    const sendOrder = () => { 
        const order = {
            buyer: {
                name: '',
                phone: '',
                email: '',
            },
            items:items,
            total: total
        };
        const db = getFirestore();
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order).then(({id})=>{
            if(id){
                alert("Your order" + id + "has been completed!")
            }
        });
    };
    return(
        <Container>
            <Table striped bordered hover variant="secondary">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={()=>removeItem(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{`$${total()}`}</td>
                </tfoot>
            </Table>
        </Container>
    )
}



{/* <Form>
    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} value={formValues.name} type="text" name="name" required

    </Form.Group>
</Form> */}