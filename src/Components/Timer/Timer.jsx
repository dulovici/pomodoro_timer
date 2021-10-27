import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "./timer.scss";




function Timer() {
  
  return (
    <div className='timer'>
       <CircularProgressbarWithChildren
        value={50}
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
        <p style={{ 
          letterSpacing: 6, 
          fontWeight:700,  
          color: "#EFF1FA",  
          fontFamily: `Kumbh Sans`}}>PAUSE</p>
       </CircularProgressbarWithChildren>
    </div>
  );
}

export default Timer;

