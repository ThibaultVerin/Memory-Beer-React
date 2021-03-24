import React, { useState} from 'react';
import './Settings.scss';
import { SettingsButton } from '../../data/LocalData';

const Settings = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleReset = () => {
    }

return (
    <div className='settings-container'>
        <h1>Settings</h1>
        <div className='settings-params'>
            <label htmlFor='darkMode' className='toggle-switch-label'>
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
            </label>
            <input className= 'toggle-switch-checkbox' type='checkbox' name='darkMode' id='darkMode'/>
        </div>
        <div className='settings-buttons'>
            {SettingsButton.map((button, index) => 
                <button key={index} type='button' >{button}</button>
            )}
        </div>
    </div>
)
}

export default Settings;