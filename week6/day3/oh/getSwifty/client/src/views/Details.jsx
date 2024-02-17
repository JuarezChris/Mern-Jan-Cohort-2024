import {React, useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [swiftyProduct, setSwiftyProduct] = useState({})

    useEffect( () => {
        // console.log(id)
        axios.get(`http://localhost:8000/api/swiftyProducts/${id}`)
            .then( (res) => {
                console.log(res.data)
                setSwiftyProduct(res.data)
            })
            .catch( (err) => {
                console.log(err)
            })
    }, [])

  return (
    <div>   
        <h2>Swifty Product for Sell!</h2>
        <p>Product: {swiftyProduct.productName}</p>
        <p>Description: {swiftyProduct.description}</p>
        <p>Price: {swiftyProduct.price}</p>
        <div>
            <p>In Stock:</p>
            <input type="checkbox" checked={swiftyProduct.inStock} />
        </div>
    </div>
  )
}

export default Details