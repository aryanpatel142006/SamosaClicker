import './App.css';
import {use, useState} from 'react';

// This is the main component of the Samosa Selector application
// It includes a header with a title, a count of samosas, and a theme changer
// The image of a samosa is displayed prominently in the header
// The theme changer allows users to switch between different themes for the application
// The count state is initialized to 0 and can be updated as needed

const App =() => {

  const [theme,setTheme] = useState('light-theme');

  const handleThemeChange = () => {

    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
    document.body.className = theme;
  }

  // Samosa Selector theme changer function
  const [count, setCount] = useState(0);
  // State to manage the count of samosas
  const handleSamosaClick = () => {
    setCount(count + 1);
    // Increment the count of samosas when the image is clicked
  };

  return(
    
    <div className="App">
      <div className="navbar">
        <div className="theme">
          <img src="./src/assets/theme_icon.png" alt="Change Theme" className='theme_icon' onClick={handleThemeChange}/>
          <h4>Change Theme</h4>
        </div>
      </div>

      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count} </h2>
        
        <img src="./src/assets/samosa3.png" alt="A Huge Samosa" className="samosa" onClick={handleSamosaClick}/>
      </div>
    </div>
  )
}

export default App