# react-router-dom

### import { Element, Link } from 'react-router-dom';
### import { Route, Routes } from 'react-router-dom';

      <Routes>
        <Route path = "/winter-page" element = {<Winter />} />
        <Route path = "/spring-page" element = {<Spring />} />
        <Route path = "/summer-page" element = {<Summer />} />
        <Route path = "/autumn-page" element = {<Autumn />} />
      </Routes>

### Nav

            <nav>
              <ul>
                <li><Link to="/winter-page">Winter</Link></li>
                <li><Link to="/spring-page">Spring</Link></li>
                <li><Link to="/summer-page">Summer</Link></li>
                <li><Link to="/autumn-page">Autumn</Link></li>
              </ul>
            </nav>