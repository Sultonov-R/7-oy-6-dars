import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [minut, setMinut] = useState(0);
  const [second, setSecond] = useState(0);
  const [isWork, serIsWork] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [workMinute, setWorkMinute] = useState(25);

  useEffect(() => {
    let interval;
    if (isActive){
      interval = setInterval( () => {
        if(second == 0){
          setMinut((minut)=minut-1) 
          setSecond(59)
        }else{
          setSecond(second - 1)
        }
        
      },1000)
    }

    return () => clearInterval(interval)

 }, [ minut, second, isActive, isWork])


  function timeFormat() {
    let str = '';
    if (minut < 10) {
      str += '0' + minut + ":";
    } else {
      str = minut + ":";
    }

    if (second < 10) {
      str += '0' + second;
    } else {
      str = second;
    }
    return str;
  }
  function handleStart() {
    setMinut(workMinute);
    setSecond(0);
    setActive(true);
  }

  function handleStop() {

  }

  return (
    <>
      <span>{timeFormat()}</span><br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button>Reset</button>
    </>
  )
}

export default App
