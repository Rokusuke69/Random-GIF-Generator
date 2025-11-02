import React from 'react'
import Random from './components/Random';
import Tag from './components/Tag';
import './styles/App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='app-container'>
        <header className='app-header'>
          <h1 className='app-title'>GIF Generator</h1>
          <p className='app-subtitle'>Discover random GIFs or search by tags</p>
        </header>
        
        <div className='components-container'>
          <Random/>
          <Tag/>
        </div>
      </div>
    </div>
  )
}

export default App