import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const [p_name, setPname] = React.useState('')
    const [p_desc, setPdesc] = React.useState('')
    const [p_qnty, setPqnty] = React.useState(0)
    const [p_price, setPprice] = React.useState(0)

    const navigate = useNavigate()
    const uid = window.sessionStorage.getItem('id')
    async function addProduct(e){
        e.preventDefault()
        const response = await axios.post(`http://localhost:4000/products/add/${uid}`,{
            p_name,
            p_desc, 
            p_qnty,
            p_price
        })
        const data = response.data
        console.log(data.status)
        if(data.status=='success'){
            navigate('/products')
        }else{
          alert(data.error)
        }
        
    }
  return (
    <div className='container' style={{display:'flex',textAlign:'center', flexDirection:'column'}}>
      <h2>Add Products</h2>
      <form action="" className='form' style={{display:'flex', flexDirection:'column',justifyContent:'flex-start',textAlign:'left'
      }}>
        <label>Product Name:</label>
        <input type="text" placeholder='Product Name' className='form-control' onChange={(e)=>setPname(e.target.value)}/>
        <label>Description:</label> 
        <input type="text" placeholder='Description' className='form-control'onChange={(e)=>setPdesc(e.target.value)} />
        <label>Quantity:</label>
        <input type="number" placeholder='Quantity' className='form-control' onChange={(e)=>setPqnty(e.target.value)}/>

        <label>Price:</label>
        <input type="number" placeholder='Price' className='form-control'onChange={(e)=>setPprice(e.target.value)} /> 
        <button className='btn btn-primary' onClick={addProduct}>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
