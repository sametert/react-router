import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Menu() {
    const navigate = useNavigate();

  return (
    <div>
        <ul>
            {/* previous step */}
            {/* <li onClick={() => navigate(-1)}>Previous</li> */}

            {/* <li>
                <a href="#/"  onClick={() => navigate(-1)}>Geri</a>
            </li> */}

            <li>
                <Link to='auth'>Auth</Link>
            </li>

            <li>
                <Link to='/'>Home</Link>
            </li>

            {/* a tag'ı ile sayfa refresh yer. Bunu istemiyorsak Link tag'ını kullanabiliriz. */}
            {/* <li>
                <a href='/'>Home</a>
            </li> */}

            <li>
                <Link to='users'>Users</Link>
            </li>
            <li style={{marginBottom:"10px"}}>
                <Link to='contact'>Contact</Link>
            </li>
            {/* <li onClick={() => navigate('contact')}>Contact</li> */}

            {/* <li >
                <a href='#' onClick={() => navigate('contact')}>Contact(test)</a>
            </li> */}

        </ul>
    </div>
  )
}

export default Menu