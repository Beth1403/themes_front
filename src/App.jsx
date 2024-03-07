
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom'; 

function App() {
  const [themes, setThemes] = useState([]);
  const navigate = useNavigate(); 

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
    
      <div className="App">
        <h1>Pick a theme</h1>
        <div className="theme-container">
          {themes.map(theme => (
            <div key={theme._id} className="theme" onClick={() => navigate(`/theme/${theme._id}`, [themes])}
            >
              <img src={`./src/img/${theme.picture}`} alt={theme.theme} />
              <h2>{theme.label}</h2>
            </div>
          ))}
        </div>
      </div>
   
    
  );
}

export default App;
