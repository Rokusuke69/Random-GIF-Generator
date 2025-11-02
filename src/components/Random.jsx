import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const { gif, loading, error, fetchData } = useGif();

  return (
    <div className='gif-card'>
      <div className='card-header'>
        <h2 className='card-title'>Random GIF</h2>
        <p className='card-description'>Get surprised with a random GIF</p>
      </div>
      
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
            alt='Random GIF' 
            className='gif-image fade-in'
          />
        )}
      </div>
      
      <button
        onClick={fetchData}
        disabled={loading}
        className='generate-btn btn-primary'
      >
        {loading ? 'Generating...' : '🎲 Generate Random GIF'}
      </button>
    </div>
  )
}

export default Random