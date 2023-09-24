import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import { useContext, useState } from "react";
import { FormGroup } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const {clear, items, removeItem} = useContext(CartContext)

    const total = () =>
        items.reduce(
            (accumulator, actualValue) =>
                accumulator + actualValue.quantity*actualValue.price,
                0
        )
    
    const handleChange = ev => {
        setFormValues(prev => ({
            
        }))
    }
}



<Form>
    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} value={formValues.name} type="text" name="name" required

    </Form.Group>
</Form>