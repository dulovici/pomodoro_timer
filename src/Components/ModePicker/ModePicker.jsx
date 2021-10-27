
import React from 'react';
import './modePicker.scss';


function ModePicker(props) {
    const{isActive, setIsActive} = props;
    
    return (
        <div className='mode-picker'>
            <div 
            className={`option ${isActive === 'pomodoro' ? 'active' : ''}`}
            onClick={()=> setIsActive('pomodoro')}
            >pomodoro</div>

            <div 
            className={`option ${isActive === 'short' ? 'active' : ''}`}
            onClick={()=> setIsActive('short')}
            >short break</div>

            <div 
            className={`option ${isActive === 'long' ? 'active' : ''}`}
            onClick={()=> setIsActive('long')}
            >long break</div>
        </div>
    )
}

export default ModePicker
