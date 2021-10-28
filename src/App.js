import React, { useState } from 'react';
import { MODAL_STYLE } from './ModalStyles/modalStyles';
import './App.scss';
import './Components/Timer/Timer';
import logo from './assets/logo.svg';
import settingIcon from './assets/icon-settings.svg';
import Modal from 'react-modal';
import ModePicker from './Components/ModePicker/ModePicker';
import Timer from './Components/Timer/Timer';
import SetupModal from './Components/Setup/SetupModal';


Modal.setAppElement('#root');
function App() {
  const [isActive, setIsActive] = useState('pomodoro');
  const [setupModalIsUp, setSetupModalIsUp] = useState(false);
  const [minutes, setMinutes] = useState(25);

  const [timerInput, setTimerInput] = useState({
    pomodoro: 25,
    short: 5,
    long: 15
  })



  return (
    <div className="App">
      <img src={logo} alt='logo' />
      <ModePicker
        isActive={isActive}
        setIsActive={setIsActive}
        timerInput={timerInput}
        setMinutes={setMinutes}
      />
      <Timer minutes={minutes} />
      <img
        className='setting'
        src={settingIcon}
        alt='sett'
        onClick={() => setSetupModalIsUp(true)}
      />


      <Modal style={MODAL_STYLE} isOpen={setupModalIsUp}>
        <SetupModal
          setSetupModalIsUp={setSetupModalIsUp}
          timerInput={timerInput}
          setTimerInput={setTimerInput}
        />
      </Modal>
    </div>
  );
}

export default App;
