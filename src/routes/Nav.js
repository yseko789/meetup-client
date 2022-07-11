import {Link} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import '../style/nav.css'
import {useState} from 'react'

const TopNav = ({location}) =>{ 
    const [expand, setExpand] = useState(false)

    if(localStorage.getItem('username')){
      return(
        <div className='container sticky-top navContainer'>
          <nav className='navbar navbar-expand-md navbar-light navbar-static-top '>
            <Link className='navbar-brand' to = '/'>Meetup</Link>
            <AiOutlineMenu
              type='button'
              className='navbar-toggler'
              data-bs-toggle = 'collapse'
              data-bs-target = '#toggleMobileMenu'
              aria-controls = 'toggleMobileMenu'
              aria-expanded='false'
              aria-label = 'Toggle navigation'
              size={'40px'}
              onClick = {()=>setExpand(!expand)}
              style = {
                {transform: expand? 'rotate(90deg)': 'rotate(0deg)'}
              }
            />
            <div className='collapse navbar-collapse' id = 'toggleMobileMenu'>
              <ul className = 'nav navbar-nav ms-auto text-center'>
                <li>
                  <Link className='nav-link' to = '/'>Home</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/vendor'>Search</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/account'>Account</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/auth/logout'>Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
    }
  }




export default TopNav