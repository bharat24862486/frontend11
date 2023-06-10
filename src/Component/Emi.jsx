import React, { useRef } from 'react'
import Nav from './Nav'
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'

const Emi = () => {
    // EMI = Rs 10,00,000 * 0.006 * (1 + 0.006)120 / ((1 + 0.006)120 – 1) = Rs 11,714.
    let ref1 = useRef(null)
    let ref2 = useRef(null)
    let ref3 = useRef(null)

    function calculate(){
        let p = +ref1.current.value
        let Interest = +ref2.current.value
        let n = +ref3.current.value
        let R = Interest/12/100
        console.log(R,n,Interest,p)
        let EMI = p * R * ( 1 + R )n/( ( 1 + R )n- 1 )
        console.log(EMI)
    }
  return (
    <Box>
        <Nav />
        <Heading>EMI</Heading>
      <Flex justifyContent={"space-around"}>

        <Box>
        <Box>
        <Text>Loan Amount</Text>
            <Input ref={ref1} type='number' name="amount" placeholder='Loan Amount' /></Box>
            <Box>
        <Text>Annual Interest (%)</Text>
            <Input ref={ref2} name="interest" type='number' placeholder='Annual Interest' /></Box>
            <Box>
        <Text>Tenure (in Months)</Text>
            <Input ref={ref3} name="months" type='number' placeholder='Tenure in months'/></Box> <br />
            <Button onClick={calculate}>Calculate</Button>
        </Box>
        

{/* <Chart data={graph} /> */}

      </Flex>
    </Box>
  )
}

export default Emi
