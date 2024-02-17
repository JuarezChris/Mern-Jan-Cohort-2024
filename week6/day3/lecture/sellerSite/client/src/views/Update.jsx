import {React, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: 0,
        inStock: true
    })
    const [errors, setErrors] = useState({})

    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( response => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch( error => {
                console.log(error)
            })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, product)
            .then( (response) => {
                console.log(response)
                navigate("/")
            })
            .catch( (error) => {
                console.log(error.response.data.errors)
                setErrors(error.response.data.errors)
            })
    }

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="productName" value={product.productName} onChange={handleChange}/>
                { errors.productName ? <p>{errors.productName.message}</p> : null }
            <input type="text" name="description" value={product.description} onChange={handleChange}/>
            <input type="text" name="image" value={product.image} onChange={handleChange}/>
            <input type="number" name="price" value={product.price} onChange={handleChange}/>
            <input type="checkbox" name="inStock" checked={product.inStock} onChange={(e) => setProduct({...product, [e.target.name]: e.target.checked})}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Update