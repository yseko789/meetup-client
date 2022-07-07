import {Link} from 'react-router-dom';

const TopNav = ({location}) =>{
    return (
      <nav className = 'container-fluid'>
        <div className = 'row'>
          {
            (location === 'register' || location ==='login') &&
            <div className = 'col-12 d-flex justify-content-start'>
              <Link className = 'link' to = '/'>Vendor Search</Link>
              
            </div>
          }
          {
            (location==='search'&&localStorage.getItem('username'))&&
            <div className = 'col-12 d-flex justify-content-between'>
              <Link className = 'link' to = '/'>Anime Search</Link>
              <Link className='link' to='/account'>Hi, {localStorage.getItem('username')}</Link>
              <Link className = 'link'to = '/auth/logout'>Logout</Link>
            </div>
          }
          {
            ((location==='search')&&!localStorage.getItem('username'))&&
            <div className = 'col-12 d-flex justify-content-between'>
              <Link className = 'link' to = '/'>Anime Search</Link>
              <Link className = 'link'to = '/auth/login'>Login</Link>
            </div>
          }
          
        </div>
      </nav>
    )
}



export default TopNav