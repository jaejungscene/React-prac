import React, { useState, useEffect } from 'react';
import {UseMemoBefore, UseMemoAfter} from './useMemo-prac';

const App = () => {
  return (
    <div style={{fontFamily: "Gill Sans"}}>
      <h1>useMemo() practice</h1>
      <div style={{display:'flex', columnGap:'20px'}}>
        <UseMemoBefore/>
        <UseMemoAfter/>
      </div>
      <br></br>
      <hr></hr>
      <h1>useEffect() practice</h1>
      <div style={{display:'flex', columnGap:'10px'}}>
        <UseMemoBefore/>
        <UseMemoAfter/>
      </div>
    </div>
  );
}

export default App;