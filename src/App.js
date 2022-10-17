import logo from './logo.svg';
import './App.css';
import './Style.css';
import Card from './Card';

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
      <Card textTitle = "This is card Title 1" textDesc="Description 1" />
      <Card textTitle = "This is card Title 2" textDesc="Description 1" />
      <Card textTitle = "This is card Title 3" textDesc="Description 1" />
    </div>
  );
}

export default App;
