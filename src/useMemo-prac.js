/*************************************************************
 * references
 * - https://www.geeksforgeeks.org/react-js-usememo-hook/
 *************************************************************/

import React, {useState, useMemo} from 'react';


export function UseMemoBefore(){
  const [number, setNumber] = useState(0);
  const squaredNum = squareNum(number);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }
  
  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  }
  return (
    <div style={{borderStyle: 'solid', borderWidth: '1px', padding:'10px'}}>
      <b>-- before useMemo() --</b>
      <br></br>
      <br></br>
      <input type="number" placeholder="Enter a number"
        value={number} onChange={onChangeHandler}>
      </input>
      <div>OUTPUT: {squaredNum}</div>
      <hr></hr>
      <button onClick= {counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
      <p>squaredNum() function is called {} times.</p>
    </div>
  );
}


/**
 * After using useMemo(), squareNum() will run only when the number changes.
 * it can be checked, if you watch "console.log("Squaring will be done!");"
 */
export function UseMemoAfter(){
  const [number, setNumber] = useState(0);
  ////////// Using useMemo //////////
  const squaredNum = useMemo(()=> {
    return squareNum(number);
  }, [number]);
  //////////////////////////////////
  const [counter, setCounter] = useState(0);
 
 // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }
   
  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  }
  return (
    <div style={{borderStyle: 'solid', borderWidth: '1px', padding:'10px'}}>
      <b>-- after useMemo() --</b>
      <br></br>
      <br></br>
      <input type="number" placeholder="Enter a number"
          value={number} onChange={onChangeHandler}>
      </input>
      <div>OUTPUT: {squaredNum}</div>
      <hr></hr>
      <button onClick= {counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
      <p>squaredNum() function is called {} times.</p>
    </div>
  );
}

function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}