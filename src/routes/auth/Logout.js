import {Link} from 'react-router-dom';
import { useEffect } from 'react';


const Logout = ()=>{
    

    useEffect(()=>{
        localStorage.clear();
    },[]);

    return(
        <div>
            <h1>Successfully logged out</h1>
            <Link to='/auth/login'>Login</Link>
        </div>
    )
}

export default Logout;