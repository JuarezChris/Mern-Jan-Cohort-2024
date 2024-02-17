import {React, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Details = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [product, setProduct] = useState({})

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

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch( error => {
                console.log(error)
            })
    }

  return (
    <div>
        <button onClick={handleDelete}>Remove</button>
        <p>{product.productName}</p>
        <p>{product.price}</p>
        <img src={product.image} alt="" />
    </div>
  )
}

export default Details