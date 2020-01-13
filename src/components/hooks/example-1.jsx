import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Example1 = () => {
   const [seconds, setSeconds] = useState(0);
   const [isActive, setIsActive] = useState(false);

   const toggle = () => setIsActive(!isActive);
   const reset = () => {
      setSeconds(0);
      setIsActive(false);
   };

   useEffect(() => {
      let interval = null;
      if (isActive) {
         interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
         }, 1000);
      } else if (!isActive && seconds !== 0) {
         clearInterval(interval);
      }

      return () => clearInterval(interval);
   }, [isActive, seconds]);

   return (
      <div className="app">
         <h3>Timer Hook</h3>
         <div className="time">
            {' '}
            <h3> {seconds} s</h3>
         </div>
         <div className="row">
            <Button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</Button>
            <Button onClick={reset}>Reset</Button>
         </div>
      </div>
   );
};

export { Example1 };
