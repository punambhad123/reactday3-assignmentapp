import logo from './logo.svg';
import './App.css';
import Reactassignment from './Components/Challenge1/Reactassignment';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';

function App() {
  let headingtext = "Register here..."
  let btntext = "Submit"
  return (
    <div className="App">
    {/* <Reactassignment htext = {headingtext} bttext = {btntext}/>  */}
    <Comp1 htext = {headingtext}/>
    <Comp2/>
    <Comp3 bttext = {btntext}/>
    </div>
  );
}

export default App;
