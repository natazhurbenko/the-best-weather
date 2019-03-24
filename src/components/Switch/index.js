//@flow
import React from 'react';

import './index.css';


type Props = {
  onChange: Function,
  checked: boolean
}

export const Switch = ( props: Props ) => {
  return (
    <React.Fragment>
      <input
        type='checkbox'
        id='toggle'
        onChange={ ( event ) => props.onChange( event.target.checked ) }
        checked={ props.checked }
      />
      <div className='checkbox-label'>
        <label htmlFor='toggle'></label>
      </div>
    </React.Fragment>
  )
}