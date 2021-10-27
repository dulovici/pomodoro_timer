
import React from 'react';
import './inputs.scss';

function Inputs() {
    return (
        <div className="inputs">
                    <div className="input">
                        <p className="p-small">pomodoro</p>
                        <input type="number" className="input1" value="25" />
                        <div className="arrows-div">
                            <div className="arrows">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow-scg arrow-up" width="14" height="7"><path className="arrow-scg arrow-up" fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 6l6-4 6 4"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 1l6 4 6-4"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <p className="p-small">short break</p>
                        <input type="number" className="input2" value="5" />
                        <div className="arrows-div">
                            <div className="arrows">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow-scg arrow-up" width="14" height="7"><path className="arrow-scg arrow-up" fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 6l6-4 6 4"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 1l6 4 6-4"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <p className="p-small">long break</p>
                        <input type="number" className="input3" value="15" />
                        <div className="arrows-div">
                            <div className="arrows">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow-scg arrow-up" width="14" height="7"><path className="arrow-scg arrow-up" fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 6l6-4 6 4"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 1l6 4 6-4"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Inputs
