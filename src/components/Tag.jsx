import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState('funny');
  const { gif, loading, error, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  function clickHandler() {
    if (tag.trim()) {
      fetchData(tag);
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' && tag.trim()) {
      fetchData(tag);
    }
  }

  return (
    <div className='gif-card'>
      <div className='card-header'>
        <h2 className='card-title'>Search GIFs</h2>
        <p className='card-description'>Find GIFs by specific tags</p>
      </div>
      
      <input 
        type="text"
        className='search-input'
        onChange={changeHandler}
        onKeyPress={handleKeyPress}
        value={tag}
        placeholder='Enter a tag (e.g., funny, cat, happy...)'
      />
      
      <div className='gif-container'>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className='error-message'>
            Failed to load GIF. Please try again.
          </div>
        ) : (
          <img 
            src={gif} 
            alt={`${tag} GIF`} 
            className='gif-image fade-in'
          />
        )}
      </div>
      
      <button
        onClick={clickHandler}
        disabled={loading || !tag.trim()}
        className='generate-btn btn-secondary'
      >
        {loading ? 'Searching...' : '🔍 Generate Tag GIF'}
      </button>
    </div>
  )
}

export default Tag