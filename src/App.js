import React, { useState, useEffect } from 'react';
import {UseMemoBefore, UseMemoAfter} from './useMemoPrac';

const App = () => {
  return (
    <div>
      <UseMemoBefore/>
      <hr></hr>
      <hr></hr>
      <UseMemoAfter/>
    </div>
  );
}

export default App;