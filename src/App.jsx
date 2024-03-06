import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ThemePage from './ThemePage';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/themes");
        setThemes(response.data);
      } catch (error) {
        console.error("Error fetching themes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Pick a theme</h1>
        <div className="theme-container">
          {themes.map(theme => (
            <div key={theme._id} className="theme">
              <Link to={`/theme/${theme._id}`}>
                <img src={`./src/img/${theme.picture}`} alt={theme.theme} />
                <h2>{theme.label}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/theme/:id" element={<ThemePage/>} />
      </Routes>
    </Router>
  );
}

export default App;