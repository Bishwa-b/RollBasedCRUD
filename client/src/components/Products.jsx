import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Products() {
    const uid = window.sessionStorage.getItem('id')
    const navigate = useNavigate()
    const [Products, setProducts] = React.useState([])

    React.useEffect(() => {
        getProducts(uid)
    }, [])
    async function getProducts(uid) {

        const response = await axios(`http://localhost:4000/products/${uid}`) 
        const data =response.data
        if(data.status==='success'){
            setProducts(data.data)
        }
    }
    async function deleteProduct(id){
        const response = await axios.delete(`http://localhost:4000/products/delete/${id}`)
        const data = response.data
        if(data.status=='success'){
            getProducts(uid)
        }
        else{
            alert(data.error)
        }
    }
    function addProduct(){
        navigate('/addproduct')
    }
    function handleLogOut(){
      window.sessionStorage.removeItem('id')
        navigate('/')
    }
  return (
    <div className='container mt-5'>
      <table className='table'>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
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
                    <button className='btn btn-primary' onClick={()=>deleteProduct(product.p_id)}>Delete</button> 

                </tr>
            ))}
        </tbody>
      </table>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <button className='btn btn-primary' onClick={()=>addProduct()} >Add Product</button>
        <button  className='btn btn-primary' onClick={()=>handleLogOut()}>Log Out</button>
      </div>
      
    </div>
  )
}

export default Products
