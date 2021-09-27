import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import Wave from 'react-wavify';
import styled from '@emotion/styled';
import waveMode from './Timer';
import IsPaused from './Timer';
import nextMode from './Timer';
import secondsLeft from './Timer';

import './Styles.css';

const ColorWa = () => {
    const [currentColor, setCurrentColor] = useState(status());
}

let colorVar='';
if (waveMode === 'work' 
? colorVar='var(--green)'
: colorVar='var(--red)')

export default ColorWa;

function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
    
    setMode(nextMode);
    modeRef.current = nextMode;
    waveMode=nextMode;