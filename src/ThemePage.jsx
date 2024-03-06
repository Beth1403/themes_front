import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ThemePage() {
  const { id } = useParams();
  const [element, setElement] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/themes/${id}`);
      const themeData = response.data;

      if (themeData && Array.isArray(themeData)) {
        const elements = themeData; 
        const randomElementIndex = Math.floor(Math.random() * elements.length);
        const randomElement = elements[randomElementIndex];
        setElement(randomElement);
      } else {
        console.error("themeData is undefined or not an array");
      }
    } catch (error) {
      console.error("Error fetching theme data:", error);
    }
  };

  fetchData();
}, [id]);

  

  const handleShowNextElement = () => {
    
  };

  return (
    <div>
      <h1>Theme Page</h1>
      {element && (
        <div>
          
          <button onClick={handleShowNextElement}>Show Next Element</button>
        </div>
      )}
    </div>
  );
}

export default ThemePage;