import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from './Components/Admin/Admin';
import SpecificData from "./Components/Admin/SpecificData";
import Home from './Components/Home';
import Nomatch from './Components/Nomatch';
import User from './Components/User/User';

function App() {
    
    return (
        <>
        <Router>
                <Routes>
                
                    <Route  path ='/' element={<Home />}>
                        <Route  path =':dataId' element={<SpecificData />}/>
                    </Route>
                    <Route  path ='admin/*' element={<Admin />}/>
                    <Route  path ='user/*' element={<User />}/>
                    <Route  path ='*' element={<Nomatch />}/>
                    
                </Routes>
        </Router>
        </>

    );

};
export default App;