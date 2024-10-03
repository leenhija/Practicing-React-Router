import { Link } from "react-router-dom";
const PRODUCTS=[
    {id:'P1', title:"Product1"},
    {id:'P2', title:"Product2"},
    {id:'P3', title:"Product3"}, 
]
export default function Products(){
    return(
        <>
        <h2>Welcome to the Product page</h2>
        <ul>
            {PRODUCTS.map(product=>(
                <li key={product.id}><Link to={product.id} >{product.title}</Link></li>
            ))}
        </ul>
        
        </>
    );
}