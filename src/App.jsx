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

  const [multiplier,setMultiplier] = useState(1);
  // State to manage the count of samosas
  const handleSamosaClick = () => {
    setCount(count + multiplier);
    // Increment the count of samosas when the image is clicked
  };

  // Samosa Prices

  const [doubleStuffedPrice,setDoubleStuffedPrice] = useState(10)
  
  const [PartyPackPrice,setPartyPackPrice] = useState(100)

  const [FullFeastPrice,setFullFeastPrice] = useState(1000)


  // Handeling samosa upgrades

  const buyDoubleStuffed = () => {
  if (count >= doubleStuffedPrice) {
    setMultiplier(multiplier * 2);
    setCount(count - doubleStuffedPrice);
    setDoubleStuffedPrice(doubleStuffedPrice * 2)
  }
  }

  const buyPartyPack = () => {
  if (count >= PartyPackPrice) {
    setMultiplier(multiplier * 5);
    setCount(count - PartyPackPrice);
    setPartyPackPrice(PartyPackPrice*5)
  }
  }

  const buyFullFeast = () => {
  if (count >= FullFeastPrice) {
    setMultiplier( multiplier * 10);
    setCount(count - FullFeastPrice);
    setFullFeastPrice(FullFeastPrice*10)
  }
  }

  return(
    
    <div className="App">
      <div className="navbar">
        <div className="theme">
          {/* <img src="/src/assets/theme_icon.png" alt="Change Theme" className='theme_icon' onClick={handleThemeChange}/> */}
          <img src="/public/theme_icon.png" alt="Change Theme" className='theme_icon' onClick={handleThemeChange}/>
         
          <h4>Change Theme</h4>
        </div>
      </div>

      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count} </h2>
        
        {/* <img src="/src/assets/samosa3.png" alt="A Huge Samosa" className={"samosa " + { theme }} onClick={handleSamosaClick}/> */}
        <img src="/public/samosa3.png" alt="A Huge Samosa" className={"samosa " + { theme }} onClick={handleSamosaClick}/>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed} >{doubleStuffedPrice} samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>{PartyPackPrice} samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳	</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast} >{FullFeastPrice} samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App