import React from 'react'
import Container from 'react-bootstrap/Container'; 
import Footer from './Footer';
import { Button} from 'react-bootstrap';
import { NavLink } from "react-router-dom";



const Base = ({title="page title" ,description="Welcome to dynamic Store",buttonEnabled=false, 
buttonText="Shop Now",
buttonLink="/",
buttonType='primary',children}) => {

  let styleContainer={
    height:"130px"
        
      
  }
  return (

    
    <div >
        <Container fluid  className='bg-dark p-2 text-white text-center d-flex justify-content-center align-items-center' style={styleContainer}>
           <div>
           <h3 className='text-center'>{title}</h3>
            <p className='text-center'>{description}</p>
            {/* {buttonEnabled && <a as="{NavLink}" to="/" href={buttonLink} className={`btn btn-${buttonType}`}>{buttonText}</a>} */}
            {buttonEnabled && <Button as={NavLink} to="/" variant={buttonType}>{buttonText}</Button>}
           </div>
           
        </Container>
        {children}

        <Footer/>
    </div>
  )
}

export default Base