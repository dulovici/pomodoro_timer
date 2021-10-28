
import React from 'react';
import './timePicker.scss';

function TimePicker(props) {
    const { inputValue, setInputValue } = props;


    return (
        <div className="inputs">
            <div className="input">
                <p className="p-small">pomodoro</p>
                <input type="number" className="input1" placeholder={inputValue.pomodoro} onChange={(e) => setInputValue({ ...inputValue, pomodoro: +e.target.value })} />
                <div className="arrows-div">
                    <div className="arrows">
                        <svg onClick={() => setInputValue({ ...inputValue, pomodoro: inputValue.pomodoro + 1 })} on xmlns="http://www.w3.org/2000/svg" className="arrow-scg arrow-up" width="14" height="7"><path className="arrow-scg arrow-up" fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 6l6-4 6 4" /></svg>
                        <svg onClick={() => setInputValue({ ...inputValue, pomodoro: inputValue.pomodoro - 1 })} xmlns="http://www.w3.org/2000/svg" className="arrow-down" width="14" height="7"><path fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 1l6 4 6-4" /></svg>
                    </div>
                </div>
            </div>

            <div className="input">
                <p className="p-small">short break</p>
                <input type="number" className="input2" placeholder={inputValue.short} onChange={(e) => setInputValue({ ...inputValue, short: +e.target.value })} />
                <div className="arrows-div">
                    <div className="arrows">
                        <svg onClick={() => setInputValue({ ...inputValue, short: inputValue.short + 1 })} xmlns="http://www.w3.org/2000/svg" className="arrow-scg arrow-up" width="14" height="7"><path className="arrow-scg arrow-up" fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 6l6-4 6 4" /></svg>
                        <svg onClick={() => setInputValue({ ...inputValue, short: inputValue.short - 1 })} xmlns="http://www.w3.org/2000/svg" className="arrow-down" width="14" height="7"><path fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 1l6 4 6-4" /></svg>
                    </div>
                </div>
            </div>

            <div className="input">
                <p className="p-small">long break</p>
                <input type="number" className="input3" placeholder={inputValue.long} onChange={(e) => setInputValue({ ...inputValue, long: +e.target.value })} />
                <div className="arrows-div">
                    <div className="arrows">
                        <svg onClick={() => setInputValue({ ...inputValue, long: inputValue.long + 1 })} xmlns="http://www.w3.org/2000/svg" className="arrow-scg arrow-up" width="14" height="7"><path className="arrow-scg arrow-up" fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 6l6-4 6 4" /></svg>
                        <svg onClick={() => setInputValue({ ...inputValue, long: inputValue.long - 1 })} xmlns="http://www.w3.org/2000/svg" className="arrow-down" width="14" height="7"><path fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 1l6 4 6-4" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimePicker
