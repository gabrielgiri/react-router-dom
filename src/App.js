import './App.css';
import { Element, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const Winter = (): Element => {
  return (
    <div className="seasons winter"><h1>Winter</h1>
     <p>Winter is the coldest season of the year in polar and temperate climates. It occurs after autumn and before spring. The tilt of Earth's axis causes seasons; winter occurs when a hemisphere is oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather.</p>
    </div>
  )
}

const Spring = (): Element => {
  return (
    <div className="seasons spring">
      <h1>Spring</h1>
      <p>Between winter and summer during which temperatures gradually rise.</p>
      </div>
  )
}

const Summer = (): Element => {
  return (
    <div className="seasons summer">
      <h1>Summer</h1>
      <p>The hottest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, the earliest sunrise and latest sunset occurs, daylight hours are longest and dark hours are shortest, with day length decreasing as the season progresses after the solstice.</p>
      </div>
  )
}

const Autumn = (): Element => {
  return (
    <div className="seasons autumn"><h1>Autumn</h1>
     <p>Season of the year between summer and winter during which temperatures gradually decrease.</p>
    </div>
  )
}

function App(): Element {
  return (
    <div className="App">

      <div className="Parent">
        <div className="left">

          <header>
            <h1>react-router-dom</h1>
            <nav>
              <ul>
                <li><Link to="/winter-page">Winter</Link></li>
                <li><Link to="/spring-page">Spring</Link></li>
                <li><Link to="/summer-page">Summer</Link></li>
                <li><Link to="/autumn-page">Autumn</Link></li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="right">

          <Routes>
            <Route path="/winter-page" element={<Winter />} />
            <Route path="/spring-page" element={<Spring />} />
            <Route path="/summer-page" element={<Summer />} />
            <Route path="/autumn-page" element={<Autumn />} />
          </Routes>
        </div>
      </div>

      <div className="container">

      </div>
    </div>
  );
}

export default App;
