import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ShowAllProducts() {
    
    const navigate = useNavigate()
    const [Products, setProducts] = React.useState([])
    React.useEffect(() => {
        getProducts()
    }, [])
    async function getProducts() {
        const response = await axios(`http://localhost:4000/products`)
        const data = response.data
        if(data.status=='success'){
            setProducts(data.data)
        }
    }   
    function handleLogOut(){
        navigate('/')
    }
  return (
    <div className='container'>
      <h3>All Product</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {/* Product rows will go here */}
            {Products.map((product) => (
                <tr key={product.p_id}>
                    <td>{product.p_id}</td>
                    <td>{product.p_name}</td>  
                    <td>{product.p_desc}</td>
                    <td>{product.p_qnty}</td>
                    <td>{product.p_price}</td>  
                   

                </tr>
            ))}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={()=>handleLogOut()}>Log Out</button>
    </div>
  )
}

export default ShowAllProducts
