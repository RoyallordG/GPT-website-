import React,  {useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () => {
  return(
    <>
     <div className="nav-links">
               <p><a href="">Home</a></p>
               <p><a href="">What is GPT</a></p>
               <p><a href="">Open AI</a></p> 
               <p><a href="">Case Studies</a></p>
               <p><a href="">Library</a></p>  
            </div>
    </>
  )
}

const Navbar = () => {
  const [NavbarMenu, setNavBarMenu] = useState(false)
  return (
    <div className="nav-bar">
            <img src={logo} alt="" className='logo'/> 
           <Menu/>
            <div className="sign-button">
                <a href="">Sign in</a>
                 <a href="" className='sign-up'>Sign up</a>
            </div>
            <div className="toggle-menu">{NavbarMenu ? <RiCloseLine color ="#fff" size={27} onClick={()=>setNavBarMenu(false) }/> 
            :  <RiMenu3Line color ="#fff" size={27} onClick={()=>setNavBarMenu(true) }/>}
            {NavbarMenu && (
          <div className="toggle-menu-list scale-up-center" >
            <Menu/>
            <div className="menu-sign">
              <a href="">Sign in</a>
                 <a href="" className='sign-up'>Sign up</a>
            </div>
            
          </div>
            )}

            </div>
    </div>
  )
}

export default Navbar
