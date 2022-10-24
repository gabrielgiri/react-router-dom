import './App.css';
import { Element, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const Winter = () : Element => <div className="seasons winter"><h1>Winter</h1></div>
const Spring = () : Element => <div className="seasons spring"><h1>Spring</h1></div>
const Summer = () : Element => <div className="seasons summer"><h1>Summer</h1></div>
const Autumn = () : Element => <div className="seasons autumn"><h1>Autumn</h1></div>


function App() : Element {
  return (
    <div className="App">

<div className="Parent">
        <div className="left">
          
           
            <header>
      <h1>react-router-dom</h1>
      <nav>
        <ul>
          <li><Link to = "/winter-page">Winter</Link></li>
          <li><Link to = "/spring-page">Spring</Link></li>
          <li><Link to = "/summer-page">Summer</Link></li>
          <li><Link to = "/autumn-page">Autumn</Link></li>


        </ul>
      </nav>
      </header>
        </div>
        <div className="right">
          
          
      <Routes>
        <Route path = "/winter-page" element = {<Winter />} />
        <Route path = "/spring-page" element = {<Spring />} />
        <Route path = "/summer-page" element = {<Summer />} />
        <Route path = "/autumn-page" element = {<Autumn />} />
      </Routes>
        </div>
    </div>


       <div className="container">

    </div>
    </div>
  );
}

export default App;
