
import React from 'react';
import './modePicker.scss';


function ModePicker(props) {
    const { isActive, setIsActive, timerInput, setMinutes } = props;

    return (
        <div className='mode-picker'>
            <div
                className={`option ${isActive === 'pomodoro' ? 'active' : ''}`}
                onClick={() => {
                    setIsActive('pomodoro')
                    setMinutes(timerInput.pomodoro)
                }}
            >pomodoro</div>

            <div
                className={`option ${isActive === 'short' ? 'active' : ''}`}
                onClick={() => {
                    setIsActive('short')
                    setMinutes(timerInput.short)
                }}
            >short break</div>

            <div
                className={`option ${isActive === 'long' ? 'active' : ''}`}
                onClick={() => {
                    setIsActive('long')
                    setMinutes(timerInput.long)
                }}
            >long break</div>
        </div>
    )
}

export default ModePicker
