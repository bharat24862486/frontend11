import { Box, Button, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useRef } from 'react'
import Nav from './Nav'

const Signup = () => {
    let ref1 = useRef(null)
    let ref2 = useRef(null)
    let ref3 = useRef(null)

    function submit(){
        let obj={
            name:ref1.current.value,
            email:ref2.current.value,
            password:ref3.current.value
        }

        axios.post(`http://localhost:8080/users/register`,obj).then((res)=>alert(res.data)).catch((err)=>console.log(err))
    }
  return (
    <Box>
         <Nav />
      <Heading>SIgn up</Heading>

      <Input type='text' ref={ref1} placeholder='Name'/>
      <br />
      <Input type='email' ref={ref2} placeholder='Email'/><br />
      <Input type='password' ref={ref3} placeholder='Password'/><br />
      <Button onClick={submit}>Register</Button>
    </Box>
  )
}

export default Signup
