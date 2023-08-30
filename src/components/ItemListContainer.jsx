import { ItemCount } from "./ItemCounter";
export const ItemListContainer = (props) => {
    return (
        <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            {props.greeting}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <ItemCount/>
        </div>  
        </div>
    );
};
