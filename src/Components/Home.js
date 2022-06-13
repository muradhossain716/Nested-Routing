import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  
  return (
    <>
    <h1>Home content</h1>
          <nav className='nav'>
                               <div className='con'>
                               <ul className='ul'>
                                <li className="list">
                                    <NavLink  className="link" to="/">Home</NavLink>
                                    </li>
                                    <li className="list">
                                    <NavLink  className='link' to="/admin">Admin</NavLink>
                                    </li>
                                    <li className="list">
                                    <NavLink  className="link" to="/user">User</NavLink>
                                    </li>
                                 
                                   
                                </ul>
                               </div>
            </nav>
            <Outlet />
    </>
  )
}
