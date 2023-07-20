import React from 'react'
import { Outlet , Link} from 'react-router-dom'

function AuthLayout() {
  return (
    <div>
        <Link to='/auth' style={{marginRight:'5px'}}>Giriş</Link>
        <Link to='/auth/register'>Register</Link>

        <Link to='/' style={{marginLeft:'5px'}}>Home</Link>
        <hr/>  
        <br/>

        <Outlet />  
    </div>
  )
}

export default AuthLayout