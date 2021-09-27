import { useContext } from 'react';
import SettingsContext from './SettingsContext';
import ReactSlider from 'react-slider';
import './Slider.css';
import BackButton from './BackButton';

function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return(
        <div style={{textAlign:'center'}}>
            <label>Work: {settingsInfo.workMinutes} min</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={.1}
                // min={1}
                max={60}
                />
            <label>Rest: {settingsInfo.breakMinutes} min</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={.1}
                // min={1}
                max={15.0}
                />
                <div style={{textAlign:'center',
                marginTop:'20px'}}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
                </div>
        {/* Settings */}
        </div>
    );
}

export default Settings;