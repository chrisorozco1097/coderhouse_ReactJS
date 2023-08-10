export const ItemListContainer = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            {props.greeting}
        </div>
    );
};
