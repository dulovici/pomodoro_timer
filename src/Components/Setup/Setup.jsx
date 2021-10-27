
import React from 'react';
import './setup.scss';
import closeIcon from '../../assets/icon-close.svg';
import Inputs from '../Inputs/Inputs';
import FontPicker from '../FontPicker/FontPicker';
import ColorPicker from '../ColorPicker/ColorPicker';

function Setup(props) {
    const {setSetupModalIsUp} = props;


    return (
        <div className='setup'>
            <header>
                <h1>Settings</h1>
                <img src={closeIcon} alt="close" onClick={()=> setSetupModalIsUp(false)}/>
            </header>
            <hr />
            <main>
            <div className="time-wr">
                <h2>TIME (MINUTES)</h2>
                <Inputs />
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
        </div>
    )
}

export default Setup
