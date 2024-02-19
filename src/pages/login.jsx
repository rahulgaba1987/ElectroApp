import React, { useContext, useState } from 'react'
import Base from '../components/Base'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { NavLink,  json,  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../services/user.service'
import UserContext from '../context/user.context'


const Login = () => {

    const userContext=  useContext(UserContext);

  const redirect = useNavigate();

  let [data, setData] = useState({
    email: '',
    password: ''
  });

  let [error, setError] = useState({
    errorData: null,
    isError: false
  });

  let [loading, setLoading] = useState(false);

  const clearLogin=()=>
  {
      setData(
        {
          email: '',
    password: ''
        }
      )
  }

  const handleChange = (event, property) => {
    setData(
      {
        ...data,
        [property]:event.target.value
      }
    )
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    if(data.email=== undefined || data.email.trim()==='')
    {
        toast.error('Email required');
        return;
    }
    if(data.password=== undefined || data.password.trim()==='')
    {
        toast.error('Password required');
        return;
    }
    setLoading(true);
    loginUser(data).then(response=>
      {
        console.log(response)
          console.log("--------------------")
          console.log(response.data)
          toast.success('Logged in ');
          setError({
            errorData:null,
            isError:false,
          })

          // userContext.setIsLogin(true);
          // userContext.setUserData(response.data);
          userContext.login(response.data);
        redirect("/users/home")

      }).catch(error=>
        {
          console.log(error);
          toast.error(error.response?.data?.message);
          setError({
            errorData:error,
            isError:true,
          })
        }).finally(()=>
        {
          setLoading(false);
        })
    
  }

  const loginForm = () => {
    return (


      <Container>
       
        <Row>
          <Col md={{
            span: 6, offset: 3
          }}>
            <Card className='my-3 border-0 shadow' style={{
              position: "relative",
              top: -60
            }} >
              <Card.Body>
              
                <Container className='text-center text-uppercase'>
                  Store Login
                  {/* {JSON.stringify(userContext)} */}
                </Container>
                {/* <Alert variant='danger' show={!error.isError}>

                         This is message
                         {error.response?.data?.message}
                </Alert> */}

                <Form noValidate onSubmit={submitForm}>
                  <Form.Group className='mb-3'>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter here'
                      onChange={(event) => handleChange(event, 'email')}
                      value={data.email}
                    >

                    </Form.Control>
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter here'
                      onChange={(event) => handleChange(event, 'password')}
                      value={data.password}
                    >

                    </Form.Control>
                    <Container className='text-center'>
                      {/* <p>Forgot Pasword  !<NavLink to='/forget'>Click Here</NavLink></p> */}
                      <p>If not register ! <NavLink to='/register'>Click Here</NavLink></p>
                    </Container>
                    <Container className='text-center'>
                      <Button type='submit' variant='success'>Login</Button>
                      <Button className='ms-2' variant='danger' onClick={()=>clearLogin()}>Reset</Button>
                    </Container>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    )

  }

  return (
    <Base
      title='Elecro Store  / Login'
      description='Login here'
    >
      <div>{loginForm()}</div>
    </Base>
  )
}

export default Login