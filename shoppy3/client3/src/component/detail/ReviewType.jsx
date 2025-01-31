import React from 'react';

export default function ReviewType(props) {
  return (
    <div className='review-type'>
      <p className='text'>{props.title}</p>
      {
        props.names && props.names.map((name, idx)=>(
          <div className='bar-metadata'>
            <span className='bar-text1'>{name}</span>
            <div className='bar-bg'>
              <div className='bar-value' style={{width:`${props.values[idx]}%`}} />
            </div>
            <span className='bar-text2'>{`${props.values[idx]}%`}</span>
          </div>  
        
      ))}
    </div> 
  );
}

