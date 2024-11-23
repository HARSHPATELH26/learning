import './App.css';
import Counter from './Components/Counter';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
    
    <Sidebar imgSrc='/Assets/Induction_CookTop_1199.png' name="Induction Cook Top" cost="50" />
    <Sidebar imgSrc="/Assets/Pressure_Cooker_549.png" name="Pressure Cooker" cost="150" />
    <Sidebar imgSrc="/Assets/Shoes_1799.png" name="Orange" cost="250" />
    <Counter/>
    </div>
  );
}

export default App;
