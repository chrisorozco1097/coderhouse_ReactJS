//import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import { useContext, useState } from "react";
import { Container} from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import  * as styles from "../styles/styles";
import Form from "react-bootstrap/Form";

export const Cart = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        address: "",
        additional: "",
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
        if (items.length === 0) {
            alert("No items have been added to the cart");
        } else {
            const order = {
                buyer: formValues,
                items,
                total: total(),
            };
            const db = getFirestore();
            const orderCollection = collection(db, 'Orders');
    
            addDoc(orderCollection, order)
                .then(({ id }) => {
                    if (id) {
                        clear();
                        alert("Your order " + id + " has been completed!");
                    }
                })
                .catch((error) => {
                    console.error('Error adding document: ', error);
                    // Handle the error here, e.g., display an error message to the user.
                });
        }
    };

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
          <div style={{ flex: 1 }}>{`$${item.price}`}</div>
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
      
    <Container className="d-flex align-items-center justify-content-center text-align-center flex-column">
      <h2 style={{display: "flex", justifyContent: 'center', marginTop:"3vh"}}>DELIVERY INFORMATION</h2>
    <Form className="m-3 d-flex align-items-center flex-column w-100">
    <Container className="d-flex align-items-center flex-row w-100">
    <Form.Group className="m-2 d-flex align-items-center flex-column w-100">
        <Form.Label>Name</Form.Label>
        <Form.Control
            onChange={handleChange}
            value={formValues.name}
            type="text"
            name='name'
            required
            autoComplete="off"
        />
    </Form.Group>
    <Form.Group className="m-2 d-flex align-items-center flex-column w-100">
        <Form.Label>Last name</Form.Label>
        <Form.Control
            onChange={handleChange}
            value={formValues.lastname}
            type='text'
            name='lastname'
            required
            autoComplete="off"
        />
    </Form.Group>
    </Container>
    <Container className="d-flex align-items-center flex-row w-100">
    <Form.Group className="m-2 d-flex align-items-center flex-column w-100">
        <Form.Label>Email</Form.Label>
        <Form.Control
            onChange={handleChange}
            value={formValues.email}
            type='email'
            name='email'
            required
            autoComplete="off"
        />
    </Form.Group>
    <Form.Group className="m-2 d-flex align-items-center flex-column w-100">
        <Form.Label>Phone number</Form.Label>
        <Form.Control 
            onChange={handleChange} 
            value={formValues.phone}
            type='text'
            name='phone'
            required
            autoComplete="off"
        /> 
    </Form.Group>
    </Container>
    <Form.Group className="m-2 d-flex align-items-center flex-column w-75">
        <Form.Label>Address</Form.Label>
        <Form.Control 
            onChange={handleChange} 
            value={formValues.address}
            type='text'
            name='address'
            required
            autoComplete="off"
        /> 
    </Form.Group>
    <Form.Group className="m-2 d-flex align-items-center flex-column w-75">
        <Form.Label>Additional information</Form.Label>
        <Form.Control 
            onChange={handleChange} 
            value={formValues.additional}
            type='text'
            name='additional'
            required
            autoComplete="off"
        /> 
    </Form.Group>
    </Form> 
    <button style={styles.buttonBottomStyle} onClick={sendOrder}>BUY</button>
    </Container>
    </Container>
  );
};