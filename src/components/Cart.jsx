//import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import { useContext, useState } from "react";
import { Container, FormGroup} from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import  * as styles from "../styles/styles";
import Form from "react-bootstrap/Form";

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
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => { 
        const order = {
            buyer: formValues,
            items,
            total: total(),
        };
        const db = getFirestore()
        const orderCollection = collection(db, 'Orders')

        addDoc(orderCollection, order).then(({id})=>{
            if(id){
                clear()
                alert("Your order" + id + "has been completed!")
            }
        })
    }

  return (
    <Container style={{marginTop:'10vh'}}>
      <div style={styles.headerRowStyle}>
        <div style={{ flex: 2 }}>Name</div>
        <div style={{ flex: 1 }}>Price</div>
        <div style={{ flex: 1 }}>Quantity</div>
        <div style={{ flex: 1 }}></div>
      </div>
      {items.map((item) => (
        <div style={styles.rowStyle} key={item.id}>
          <div style={{ flex: 2 }}>{item.name}</div>
          <div style={{ flex: 1 }}>{item.price}</div>
          <div style={{ flex: 1 }}>{item.quantity}</div>
          <div style={{ flex: 1 }}>
            <button style={styles.buttonStyle} onClick={() => removeItem(item.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <div style={styles.footerRowStyle}>
        <div style={{ flex: 2 }}>TOTAL</div>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}>${total()}</div>
      </div> 
      <h2 style={{display: "flex", justifyContent: 'center'}}>USER INFORMATION</h2>
    <Form //</Container>className="d-flex align-items-center w-100"
    >
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
            onChange={handleChange}
            value={formValues.name}
            type="text"
            name='name'
        />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
            onChange={handleChange}
            value={formValues.email}
            type='email'
            name='email'
        />
    </Form.Group>
    <Form.Group className='mb-e'>
        <Form.Label>Phone number</Form.Label>
        <Form.Control 
            onChange={handleChange} 
            value={formValues.phone}
            type='text'
            name='phone'
        /> 
    </Form.Group>
    </Form> 
    <button onClick={sendOrder}>Buy</button>
    </Container>
  );
};

{/* <Form>
    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} value={formValues.name} type="text" name="name" required

    </Form.Group>
</Form> */}