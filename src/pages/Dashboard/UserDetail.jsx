import React, {useState, useEffect} from 'react'
import { useParams, Link, useLocation} from 'react-router-dom'

function UserDetail() {
    const {id} = useParams();
    const location = useLocation();
    console.log(id)

    const [userDetails, setUserDetails] = useState(location.state);

    useEffect(() => {
        if(!userDetails?.id) {
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(res => res.json())
          .then(data => setUserDetails(data))
        }     
    }, [id,userDetails])

  

  return (
    <div>
       <h2>User Detail</h2>

      {
        userDetails &&
        <div>
          <p>{userDetails.name}</p>
          <p>{userDetails.email}</p>
       </div> 
      }

      {/* incele burayı tekrardan */}
      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    
    </div>
  )
}

export default UserDetail