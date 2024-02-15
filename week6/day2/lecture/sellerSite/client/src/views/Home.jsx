import { useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
        <table>
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
                    <td>{item.price}</td>
                    <td>{item.inStock ? <p>Yes</p> : <p>No</p>} </td>
                    <td>
                        <Link to={`/dets/${item._id}`} >Details</Link>
                        <Link to={`/update/${item._id}`} >Edit</Link>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        {/* {
            products.map( (item) => (
                <p key= {item._id} >{item.productName}</p>
            ))
        } */}

    </div>
)
}

export default Home

