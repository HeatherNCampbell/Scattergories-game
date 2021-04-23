import { useEffect, useState } from 'react';
import './Timer.css'

const Timer = ({ setHide }) => {
  const startingTime = 60;
  const [time, setTime] = useState(startingTime);

  // Function that begins the countdown and reveals the text/content for list items (AKA Categories)
  const playGame = () => {
    setTime(time - 1);
    setHide(false);
  }

  //  The useEffect hook/function passed into the 'useEffect' runs whenever the 'time' state value is updated and when the page first loads.
  useEffect(() => {

    // The code inside this 'if' statement will NOT run unless the consition is 'true'. (when the value of the 'time' state variable is equal to the amount of the 'time' (seconds) set as the starting amount for the countdown timer)
    if (time !== startingTime) {

      // Since 'useEffect' runs evertime the 'time' state value is updated, a 'setTimeout' is used to delay the number change by one second each time the 'time' state value changes.
      setTimeout(() => {

        //  Checking to make sure the time has not run out. Checking to see if time is equal to zero. 
        if (time > 0) {

          //  Updating the value for the 'time' state variable which causes the 'Timer' component and 'useEffect' function to rerun.
          setTime(time - 1);

          // Code inside 'else'  will run when time has run out. When 'time' is equal to '0'.
        } else {

          // Updating the value for the 'time' state variable  by setting the 'time' back to the value for 'startingTime'. This causes the 'Timer' component and 'useEffect' function to rerun.
          setTime(startingTime);

          // Hides the text/content on all the categories (List Items <li>s) by adding '.hide' CSS class to all of the <li>s
          setHide(true);

          // The alert is inside another 'setTimeout' so that it will NOT run/display before the text/content is hidden for the 'categories' (List Items <li>s)
          setTimeout(() => {
            alert('TIME IS UP!!!');

            // After 'alert' is complete (The user clicks 'OK') the categories (List Items <li>s) are shown again.
            setHide(false);
          }, 100);
        }
      }, 1000);
    }
  }, [time]);

  return (
    <div className='Timer'>
      <div className='Timer-Top'>
        <p>TIMER</p>
        <button onClick={playGame} className='Timer-Top-Btn'>PLAY</button>
      </div>
      <div className='Timer-Display'>
        <h1 className='Timer-Display-H1'>{time}</h1>
      </div>
    </div>
  );
}
export default Timer;