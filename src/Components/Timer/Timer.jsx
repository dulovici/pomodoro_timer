import { useState, useEffect } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { secToTime } from "../../Tools/tools";
import "./timer.scss";

let interval;


function Timer(props) {
  const { minutes } = props;

  const [isRuning, setIsRuning] = useState(false);
  const [value, setValue] = useState(0);
  const [seconds, setSeconds] = useState(minutes * 60)




  useEffect(() => {
    setSeconds(minutes * 60)
    setValue(0)
  }, [minutes]);

  useEffect(() => {
    if (!seconds) clearInterval(interval)
  }, [seconds]);

  const startTimer = (minutes) => {
    const seconds = minutes * 60;
    const incrementer = 100 / seconds;

    if (!isRuning) {
      interval = setInterval(() => {
        setValue((prev) => prev + incrementer);
        setSeconds((prev) => prev - 1);

      }, 1000);
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
            padding: '30px'
          },
          path: {
            stroke: '#F87070',
          },
          trail: { stroke: '#161932' },
          background: { fill: '#161932' }

        }}
      >
        <h1 style={{
          fontSize: 100,
          marginBottom: 5,
          color: "#EFF1FA",
          fontFamily: `Kumbh Sans`
        }}>{secToTime(seconds)}</h1>
        <p
          onClick={() => {
            startTimer(minutes)
            setIsRuning(!isRuning)
          }}
          style={{
            cursor: 'pointer',
            letterSpacing: 6,
            fontWeight: 700,
            color: "#EFF1FA",
            fontFamily: `Kumbh Sans`,
          }}>{isRuning ? 'PAUSE' : 'PLAY'}</p>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default Timer;

