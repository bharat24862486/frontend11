import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import axios from "axios"
import { Navigate } from 'react-router-dom';
import Nav from './Nav';

const Signin = () => {
    let ref1 = useRef(null)
    let ref2 = useRef(null)
    const [token,setToken] = useState('')
    const [name,setName] = useState('')
    

    if(token){
        localStorage.setItem('token', token)
        localStorage.setItem('userName', name)
        return <Navigate to={'/profile'}/>
    }

    

    function submit() {
        
        let obj = {
            email: ref1.current.value,
            password: ref2.current.value
        }
        console.log(obj)

        axios.post(`http://localhost:8080/users/login`, obj).then((res) =>{
            setToken(res.data.token)
            return setName(res.data.userName)
        }).catch((err) => console.log(err))
    }
    return (
        <Box>
             <Nav />
            <Heading>Signin</Heading>

            <Input type='email' ref={ref1} placeholder={'Email'} />
            <br />
            <Input type='password' ref={ref2} placeholder={'Password'} />
            <br />
            <Button onClick={submit}>Login</Button>

        </Box>
    )
}

export default Signin
