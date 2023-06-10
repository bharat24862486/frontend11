import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [token,setToken] = useState(localStorage.getItem('token'))
    

    function click(){

       
        localStorage.setItem('token', '')
        setToken('')
    }
    return (
        <Flex bgColor={'blue.400'} color={'white'} justifyContent={'space-around'}>

            <Link to={'/profile'}><Text>Profile</Text></Link>
            <Link to={'/EMIcalculate'}><Text>EMI Calculator</Text></Link>
            {token ? <Button onClick={click}>Logout</Button> : <Flex justifyContent={'space-between'} w={"20%"}>
                <Link to={'/register'}><Text>Register</Text></Link>
                <Link to={'/login'}><Text>Login</Text></Link></Flex>}


        </Flex>
    )
}

export default Nav
