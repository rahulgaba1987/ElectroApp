import React from 'react'
import { toast } from 'react-toastify'
import Base from '../components/Base';


const about = () => {

  function test()
  {
    toast.success('You are login successfully');
  }
  return (
    <Base
    title='Electro store /About Us'
    description={null}
    >
    <div>
        <h1>This is about page..</h1>
        <button onClick={()=>test()}>Test</button>
        
    </div>
    </Base>
    
  )
}

export default about