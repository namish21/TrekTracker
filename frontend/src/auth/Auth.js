import React, { useState } from 'react'
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import { sendAuthRequest } from '../api-helpers/helpers';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const [isSignup , setIsSignup ] = useState(true);
  const [inputs,setInputs] = useState( { name:"" , email:"" , password:"" } )

  const handleSubmit = (e) => {

    e.preventDefault()
    console.log(inputs)

    if( isSignup ){
      sendAuthRequest(true,inputs).then( (data) => localStorage.setItem("userId", data.user._id) ).then( () => { dispatch(authActions.login()); navigate("/diaries")  } ) .catch( (err) => console.log(err) );
    }
    else sendAuthRequest(false,inputs).then( (data) => localStorage.setItem("userId", data.id ) ).then( () => { dispatch(authActions.login());  navigate("/diaries")  } ).catch( (err) => console.log(err) );

  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputs( (prevState) => ( { ...prevState , 
    [e.target.name] : e.target.value,
    } ) );
  }

  return (




    <Box widht="30%" borderRadius={5} boxShadow={"5px 5px 10px #ccc"} marginTop={10} >
      <form onSubmit={handleSubmit} >
        <Box display="flex" flexDirection={"column"} width="60%" padding={5} margin="auto" >
          <Typography padding={1} variant='h4' textAlign="center" >
            { isSignup ? "Signup" : "Login" }
          </Typography>
          { isSignup &&  (
            <>
            <FormLabel> Name </FormLabel>
            <TextField onChange={handleChange} value={inputs.name} name="name" required margin="normal" />
            </>
          )}
          <FormLabel> Email </FormLabel>
          <TextField onChange={handleChange} value={inputs.email} name="email" required margin="normal"  />
          <FormLabel> Password </FormLabel>
          <TextField onChange={handleChange} value={inputs.password} name="password" required margin="normal" />

          <button  onClick={handleSubmit} className="btn btn-wide mt-2 mx-auto"> { isSignup ? "Signup" : "Login" } </button>
          <button  onClick={()=> setIsSignup(!isSignup) } className="btn btn-wide mt-2 mx-auto"> Change to { isSignup ? "Login": "Signup" } </button>

          {/* <Button onClick={handleSubmit} sx={{ mt:2 }}  type='submit' variant='contained' > { isSignup ? "Signup" : "Login" } </Button> */}
          {/* <Button onClick={()=> setIsSignup(!isSignup) } sx={{ mt:2 , borderRadius:10 }} variant='outlined' > Change to { isSignup ? "Login": "Signup" } </Button> */}
        </Box>
      </form>
    </Box>
    
  )
}

export default Auth