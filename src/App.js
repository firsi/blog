import React from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Wrapper />
      </div>
    </Provider>
    
  );
}

export default App;
