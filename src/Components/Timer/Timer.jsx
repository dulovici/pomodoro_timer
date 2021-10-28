import { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "./timer.scss";


function Timer() {
const [isRuning, setIsRuning] = useState(false);
const [value, setValue] = useState(0);

let interval;

const startTimer = (minutes)=> {
  const seconds = minutes * 60;
  const incrementer = 100 / seconds;
  

    if(!isRuning) {
    interval = setInterval(()=>{
        setValue((prev)=> prev + incrementer);
    },1000);

    return 
  }
    
    return clearInterval(interval)

} 


  return (
    <div className='timer'>
       <CircularProgressbarWithChildren
        value={value}
        background
        strokeWidth={4}
        backgroundPadding={4}
        styles={{
          root: {
            width: '450px', 
            background: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)", borderRadius: '50%', 
            padding: '30px'},
          path: {
            stroke: '#F87070', 
            },
          trail: {stroke: '#161932'},
          background: {fill: '#161932'}
          
        }}
       >
        <h1 style={{ 
          fontSize: 100, 
          marginBottom: 5, 
          color: "#EFF1FA", 
          fontFamily: `Kumbh Sans`}}>17:59</h1>
        <p 
        onClick={()=> {
          startTimer(1)
          setIsRuning(!isRuning)
        }}
        style={{ 
          cursor: 'pointer',
          letterSpacing: 6, 
          fontWeight:700,  
          color: "#EFF1FA",  
          fontFamily: `Kumbh Sans`,}}>{isRuning?'PAUSE':'PLAY'}</p>
       </CircularProgressbarWithChildren>
    </div>
  );
}

export default Timer;

