import React, {useState} from 'react';
import { MODAL_STYLE } from './ModalStyles/modalStyles';
import './App.scss';
import './Components/Timer/Timer';
import logo from './assets/logo.svg';
import settingIcon from './assets/icon-settings.svg';
import Modal from 'react-modal';
import ModePicker from './Components/ModePicker/ModePicker';
import Timer from './Components/Timer/Timer';
import Setup from './Components/Setup/Setup';



function App() {
  const [isActive, setIsActive] = useState('pomodoro');
  const [setupModalIsUp, setSetupModalIsUp] = useState(false);

  return (
    <div className="App">
      <img src={logo} alt='logo'/>
      <ModePicker isActive={isActive} setIsActive={setIsActive} />
      <Timer />
      <img 
      className='setting' 
      src={settingIcon} 
      alt='sett'
      onClick={()=> setSetupModalIsUp(true)}
      />


      <Modal style={MODAL_STYLE} isOpen={setupModalIsUp}>
        <Setup setSetupModalIsUp={setSetupModalIsUp}/>
      </Modal>
    </div>
  );
}

export default App;
