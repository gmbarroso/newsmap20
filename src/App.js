import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Root from './pages/index'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  )
}

export default App;
