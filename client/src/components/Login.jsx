import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const[username,setUsername]=React.useState('')
    const[password,setPassword]=React.useState('')  


    async function handleLogin(e){    
        e.preventDefault()

        const response = await axios.post('http://localhost:4000/users/login',{
            username,
            password
        })
        const data = response.data
        if(data.status==='success'){
            const user = data.data[0]
            if(user.role==='ADMIN'){
              
              window.sessionStorage.setItem('id',user.user_id)
              navigate('/allproducts')
            }
            else{
                window.sessionStorage.setItem('id',user.user_id)
                navigate('/products')
                
            }
        }

    }

  return (
    <div className='container mt-5'>
        <h2>Login</h2>
      <form action="" className='form' style={{ display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'flex-start',gap:'10px', }}>
        <label>UserName:</label>
        <input type="text" placeholder='Username' className='form-control' onChange={(e)=>setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" placeholder='Password' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin} className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default Login
