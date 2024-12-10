import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Counter from './Components/Counter';
import Datadetails from './Components/Datadetails';
import Sidebar from './Components/Sidebar';
import Method from './Components/Method';
import TableCreation from './Components/TableCreation';
import RTK from './Redux/RTK';


function App() {
  return (
    <div className="App">
      
    {/* <Sidebar imgSrc='/Assets/Induction_CookTop_1199.png' name='Induction Cook Top' cost="50"/>
    <Sidebar imgSrc='/Assets/Pressure_Cooker_549.png' name="Pressure Cooker" cost="150"/>
    <Sidebar imgSrc="/Assets/Shoes_1799.png" name="Orange" cost="250" />
    <Counter/>
    <Datadetails/> */}
      <ul className='singlePage'>
        <li> <Link to='/home'>  Show/Hide & Synthetic Event </Link> </li>
        <li><Link to='/products'> Counter </Link></li>
        <li><Link to='/aboutus'> Filter/Delete </Link></li>
        <li><Link to='/array'>Method </Link> </li>
        <li><Link to='/tabledetails'>Table Creation </Link> </li>
        <li><Link to='/syneve'> RTK </Link></li>
   
      </ul>
      <hr/>
      <Routes>
        <Route path='/home'element={<Datadetails/>}/>
        <Route path='/products'element={<Counter/>}/>
        <Route path='/aboutus'element={<Sidebar/>}/>
        <Route path='/array'element={<Method/>}/>
        <Route path='/tabledetails'element={<TableCreation/>}/>
        <Route path='/syneve'element={<RTK/>}/>

      </Routes>


   
    </div>
  );
}

export default App;


