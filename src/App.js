import './App.css';
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import Card from './component/Card';
import { categories } from "./helper/data"
import {useState} from "react" 

function App() {

const [isTurn,setIsTurn] = useState(true)

const handleClick = ()=> {

}

  return (
    <div className="App">
     <ReactIcon className="appIcon" />
<Card categories={categories} onClick={handleClick}
 isturnprop = {isTurn}
 setIsTurnProp = {setIsTurn}
 />
    </div>
  );
}

export default App;
