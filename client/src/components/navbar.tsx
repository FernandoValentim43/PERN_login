import { NavLink } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";


const Navbar = () => {
 const isAuth = false
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <div >
          <NavLink to='/' style={{ color: "transparent"}}>
            <div className="flex flex-row justify-center items-center">
              <AiOutlineHome  fontSize="1.5em" className="mr-2" color="black"/>
              <span className='navbar-brand mb-0 h1'>Home</span>
            </div>
          </NavLink>
        </div>

    
        {isAuth ? (
          <div>
            <NavLink to='/dashboard' className='mx-3'>
              <span>Dashboard</span>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to='/login'>
              <span>Login</span>
            </NavLink>

            <NavLink to='/register' className='mx-3'>
              <span>Register</span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar