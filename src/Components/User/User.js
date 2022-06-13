import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
export default function User() {
  return (
    <>
   <nav className='nav'>
            <div className='con'>
              <ul className='ul'>
                <li className="list">
                  <Link to='/user/home' className='link'>Home</Link>
                </li>
                <li className="list">
                  <Link to='/user/post' className='link'>Post</Link>
                </li>
                <li className="list">
                  <Link to='/user/profile' className='link'>Profile</Link>
                </li>
                                 
              </ul>
            </div>
    </nav>

    <Routes>
      <Route path ='home' element ={<Home />}/>
      <Route  path ='post' element={<Post />}/>
      <Route  path ='profile' element={<Profile />}/>
    </Routes>
    
    </>
  )
}
