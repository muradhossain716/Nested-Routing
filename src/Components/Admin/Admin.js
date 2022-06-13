
import { Link, Route, Routes } from "react-router-dom";
import { getInvoices } from '../data';
import Approve from './Approve';
import Dashboard from './Dashboard';
import Editpost from './Editpost';
export default function Admin() {
  const data= getInvoices();
  console.log(data)
  return (
    <>
      
        {/* {data.map((el) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/data/${el.number}`}
            key={el.number}
          >
            {el.name}
          </Link>))} */}
         {/* <Home/> */}
         <nav className='nav'>
            <div className='con'>
              <ul className='ul'>
                <li className="list">
                  <Link to='/admin/dashboard' className='link'>Dashboard</Link>
                </li>
                <li className="list">
                  <Link to='/admin/editpost' className='link'>Editpost</Link>
                </li>
                <li className="list">
                  <Link to='/admin/approve' className='link'>Approve</Link>
                </li>
                                 
              </ul>
            </div>
          </nav>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/editpost' element={<Editpost />}/>
          <Route path='/approve' element={<Approve />}/>
        </Routes>
       </>
  )
}
