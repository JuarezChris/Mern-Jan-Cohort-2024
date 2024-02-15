import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const navigate = useNavigate()

    const [swiftyProduct, setSwiftyProduct] = useState({
        productName: "",
        description: "",
        price: 0,
        inStock: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/swiftyProducts', swiftyProduct)
            .then( response => {
                console.log(response)
                navigate("/")
            })
            .catch( error => {
                console.log(error)
            })
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="productName" value={swiftyProduct.productName} onChange={ (e) => setSwiftyProduct({...swiftyProduct, [e.target.name]: e.target.value})}/>
            <input type="text" name="description" onChange={(e) => setSwiftyProduct({...swiftyProduct, [e.target.name]: e.target.value})}/>
            <input type="number" name="price" onChange={(e) => setSwiftyProduct({...swiftyProduct, [e.target.name]: e.target.value})}/>
            <input type="checkbox" checked={swiftyProduct.inStock} onChange={(e) => setSwiftyProduct({...swiftyProduct, [e.target.name]: e.target.checked})}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Create