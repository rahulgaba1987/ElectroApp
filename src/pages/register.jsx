import React, { useState } from 'react'
import Base from '../components/Base'
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { registerUser } from '../services/user.service';


const register = () => {

    const RegisterForm = () => {

        let [data, setData] = useState({

            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            about: '',
            gender: ''
        });
        const [errorData,setErrorData]=useState(
            {
                isError:false,
                errorData:null
            }
        )

        const [loading,setLoading]=useState(false);

        const submitForm=(event)=>
        {
             event.preventDefault();
             console.log(data);
            
            if(((data.name) === undefined) || (data.name.trim()==''))
             {
                toast.error('Name is required');
                return 
             }
             if(((data.email) === undefined) || (data.email.trim()==''))
             {
                toast.error('Email is required');
                return 
             }
             if(((data.password) === undefined) || (data.password.trim()==''))
             {
                toast.error('Password is required');
                return 
             }
             if(((data.confirmPassword) === undefined) || (data.confirmPassword.trim()==''))
             {
                toast.error('Confirm Password is required');
                return 
             }
             if(data.password!=data.confirmPassword)
             {
                toast.error('Password and Confirm Password are not matched');
                return 
             }
             setLoading(true);
             registerUser(data).then((response)=>
             {
                console.log(response.data);
                toast.success('User created successfully ');
                clearData();
             }).catch(error=>
                { 
                    console.error(error);
                    setErrorData(
                        {
                            errorData:true,
                            errorData:error

                        }
                    )
                    console.error("Error in creating user ! Try again ");
                }).finally(()=>setLoading(false))
        }

       
       const handleChange=(event,property)=>
        {
             console.log(event);
             console.log(property);
             setData(
                {
                    ...data,
                    [property]:event.target.value

                }
             )

        }
        
        const clearData=()=>
        {
            setData(
                {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    about: '',
                    gender: ''
                }
            )
        }
        return (

            <Container >
                <Row>
                    {/* {JSON.stringify(data)} */}
                    <Col sm={{ span: 6, offset: 3 }} className='bg-primary'>

                        <Card className='my-2 border-0' style={ {position:'relative', top:-40}}>
                            <Card.Body>
                                <h4 className='text-center'>SignUp Here</h4>
                                <Form noValidate onSubmit={submitForm}>
                                    {/* Name field */}
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Enter your name</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter your name" 
                                        value={data.name}
                                        onChange={(event)=>handleChange(event,'name')}
                                        isInvalid={errorData.errorData?.response?.data?.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                                       {errorData.errorData?.response?.data?.name}
                                         </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Email Field */}
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Enter your Email</Form.Label>
                                        <Form.Control 
                                        type="email" 
                                        value={data.email}
                                        placeholder="Enter your email"
                                        onChange={(event)=>handleChange(event,'email')}
                                        isInvalid={errorData.errorData?.response?.data?.email}
                                         />
                                         <Form.Control.Feedback type="invalid">
                                                       {errorData.errorData?.response?.data?.email}
                                         </Form.Control.Feedback>

                                    </Form.Group>

                                    {/*  password */}
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label>Enter new Password</Form.Label>
                                        <Form.Control 
                                        type="password"
                                        value={data.password}
                                         placeholder="Enter your password"
                                         onChange={(event)=>handleChange(event,'password')}
                                         isInvalid={errorData.errorData?.response?.data?.password}
                                         />
                                         <Form.Control.Feedback type="invalid">
                                                       {errorData.errorData?.response?.data?.password}
                                         </Form.Control.Feedback>

                                    </Form.Group>

                                    {/*  password */}
                                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                                        <Form.Label>Re-Enter Password</Form.Label>
                                        <Form.Control
                                         type="password" 
                                         value={data.confirmPassword}
                                         placeholder="Enter confirm password"
                                         onChange={(event)=>handleChange(event,'confirmPassword')}
                                          />

                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label controlId="formGender">
                                            Select Gender
                                        </Form.Label>
                                        <div>

                                            <Form.Check
                                                inline

                                                label="Male"
                                                name="gender"
                                                type={'radio'}
                                                id={`gender`}
                                                value={'male'}
                                                checked={data.gender=='male'}
                                                onChange={(event)=>handleChange(event,'gender')}
                                                
                                            />

                                            <Form.Check
                                                inline

                                                label="Female"
                                                name="gender"
                                                type={'radio'}
                                                id={`gender`}
                                                value={'female'}
                                                checked={data.gender=='female'}
                                                onChange={(event)=>handleChange(event,'gender')}
                                            />
                                        </div>

                                    </Form.Group>
                                    <Form.Group className='mt-2' controlId="formArea">

                                        <Form.Label>Write something about yourself</Form.Label>

                                        <Form.Control 
                                               as={'textarea'} 
                                               rows={3} 
                                               placeholder='Write here'
                                               value={data.about}
                                               onChange={(event)=>handleChange(event,'about')}
                                               isInvalid={errorData.errorData?.response?.data?.about}
                                               >

                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                                       {errorData.errorData?.response?.data?.about}
                                         </Form.Control.Feedback>

                                    </Form.Group>

                                    <Container>
                                        <p className='text-center'>
                                            Already Register ! <a >Login</a>
                                        </p>
                                    </Container>
                                    <Container className='text-center'>
                                        <Button 
                                             type='submit'
                                             className='text-uppercase'
                                              variant='success'>
                                                <Spinner 
                                                  animation='border'
                                                  size='sm'
                                                  className='me-2'
                                                  hidden={!loading}
                                                />
                                                <span  hidden={!loading}>Wait...</span>
                                                <span  hidden={loading}> Register</span>
                                               
                                        </Button>
                                        <Button className='ms-2' variant='danger' onClick={clearData}>Reset</Button>
                                    </Container>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
    return (
        <Base
            title='Elecro Store  / Signup'
            description='Fill the form correctly to register new user'
        >
            <div>{RegisterForm()}</div>
        </Base>

    )
}

export default register