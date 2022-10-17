import loading from './loading.gif';
import React from 'react'

const Spinner = () => {
  return (
    <div>
      <img src={loading} alt={"loading"}/>
    </div>
  )
}

export default Spinner
