import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import React, {useState} from "react";
import SettingsContext from "./SettingsContext";
import ReactDOM from "react-dom";
import Wave from 'react-wavify';
import Wavers from './Wavers';
import "./Styles.css";



function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(30);
  const [breakMinutes, setBreakMinutes] = useState(7.5);

  return (

    <div>

 
      <main>

        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings /> : <Timer />}
          {/* <Wavers /> */}
          {/* {showSettings ? <Wavers /> : <WaversSettings />} */}
          
        </SettingsContext.Provider>
        
      </main>

)
{/* <Wavers /> */}

    </div>
      
  );
}

ReactDOM.render(<App />, document.getElementById("root"));




export default App;