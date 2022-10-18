import logo from './logo.svg';
import './App.css';
import './Style.css';
import Card from './Card';
import Data from './data.json';
import Unique from './Unique';
import Nested from './Nested';
import Card1 from './CardClass';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import ReactBootstrap from './components/React_Bootstrap/ReactBootstrap';
import State from './components/State';

const demoTitle = "New App";
const demodescription = "New App description";
// const headingStyle ={
//   color: "white",
//   fontSize: "20px"
// }


// function Card(){
//   return <div className='card'>
//   <h1 className='cardTitle'>This is card Title</h1>
//   <p className='cardBody'>Card Body</p>
// </div>
// }
function App() {
  // let items = [];
  // // for(let i=0;i<Data.length;i++){
  //   // items.push(<Card textTitle = {Data[i].title} textDesc={Data[i].description} />)
  // // }

  // items = Data.map((item) => <Card textTitle = {item.title} textDesc={item.description} />)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        This is my react app
        {/* <h2 style={headingStyle}>{demoTitle}</h2> */}
        <h2 className='headingStyle'>{demoTitle}</h2>
        <p>{demodescription}</p>
      </header>
      {/* <Card textTitle = "This is card Title 1" textDesc="Description 1" />
      <Card textTitle = "This is card Title 2" textDesc="Description 1" />
      <Card textTitle = "This is card Title 3" textDesc="Description 1" /> */}
      {/* <Card textTitle = {Data[0].title} textDesc={Data[0].description} />
      <Card textTitle = {Data[1].title} textDesc={Data[1].description} />
      <Card textTitle = {Data[2].title} textDesc={Data[2].description} />
      <Card textTitle = {Data[3].title} textDesc={Data[3].description} /> */}
      {Data.map((item, index) => <Card key={index} textTitle = {item.title} textDesc={item.description} />)}

      <Unique />
      <br/> <br/> <br/> <br/>  
      <Nested />
      <br />
      <br />
      <br />
      <Card1 name="card comp" />

      <button>
        <FaFacebook className='icon' />
        <FaYoutube className='icon' />
      </button>

      <br /> <br />

      <ReactBootstrap />
      <br /> <br />

      <State />
    </div>
  );
}

export default App;
