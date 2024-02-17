import {React, useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
    const [swiftyProducts, setSwiftyProducts] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/swiftyProducts')
            .then( (response) => {
                console.log(response.data)
                setSwiftyProducts(response.data)
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [])

  return (
    <div>
        {
            swiftyProducts.map( (item) => (
                <div key={item._id}>
                    <p>Product: {item.productName}</p>
                    <p>Price: {item.price}</p>
                    <p>In stock: {item.inStock ? "yes" : "No!!"}</p>
                    <Link to={`/details/${item._id}`}><p>Details</p></Link>
                    <Link to={`/edit/${item._id}`}><p>Edit</p></Link>
                    <hr /> 
                </div>
            ))
        }
    </div>
  )
}

export default Home