export const ItemDetail = ({product})=> (
    <div>
        <h1>{product.name}</h1>
        <img src={product.image}/>
        <div>{product.competitiveness}</div>
    </div>
)
    