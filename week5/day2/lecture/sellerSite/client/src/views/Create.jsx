import {React, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: 0,
        inStock: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', product)
            .then( (response) => {
                console.log(response)
                navigate("/")
            })
            .catch( (error) => {
                console.log(error)
            })
    }

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="productName" value={product.productName} onChange={handleChange}/>
            <input type="text" name="description" value={product.description} onChange={handleChange}/>
            <input type="number" name="price" value={product.price} onChange={handleChange}/>
            <input type="checkbox" name="inStock" checked={product.inStock} onChange={(e) => setProduct({...product, [e.target.name]: e.target.checked})}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Create