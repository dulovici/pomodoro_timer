
import React, { useState } from 'react';
import './setupModal.scss';
import closeIcon from '../../assets/icon-close.svg';
import TimePicker from '../TimePicker/TimePicker';
import FontPicker from '../FontPicker/FontPicker';
import ColorPicker from '../ColorPicker/ColorPicker';

function SetupModal(props) {
    const { setSetupModalIsUp, timerInput, setTimerInput } = props;

    const [inputValue, setInputValue] = useState({
        pomodoro: 25,
        short: 5,
        long: 15
    })


    return (
        <div className='setup'>
            <header>
                <h1>Settings</h1>
                <img src={closeIcon} alt="close" onClick={() => setSetupModalIsUp(false)} />
            </header>
            <hr />
            <main>
                <div className="time-wr">
                    <h2>TIME (MINUTES)</h2>
                    <TimePicker inputValue={inputValue} setInputValue={setInputValue} />
                </div>

                <div className="fonts-wr">
                    <h2>FONT</h2>
                    <FontPicker />
                </div>

                <div className="colors-wr">
                    <h2>COLOR</h2>
                    <ColorPicker />
                </div>
            </main>

            <div
                className="apply"
                onClick={() => {
                    setSetupModalIsUp(false)
                    setTimerInput({ ...timerInput, ...inputValue })
                }}
            >Apply</div>
        </div >
    )
}

export default SetupModal
