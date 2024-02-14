import { useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then( (response) => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [])

return (
    <div>
        {
            products.map( (item) => (
                <p key= {item._id} >{item.productName}</p>
            ))
        }

    </div>
)
}

export default Home


{/* <table>
<thead>
    <tr>
        <th>Product</th>
        <th>Price</th>
        <th>In Stock</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    {products.map((item) => (
        <tr key={item._id}>
            <td>{item.productName}</td>
            <td>{item.productName}</td>
            <td>{item.inStock ? 'Yes' : 'No'} </td>
            <td>
            {item.productName}
            </td>
        </tr>
    ))}
</tbody>
</table> */}