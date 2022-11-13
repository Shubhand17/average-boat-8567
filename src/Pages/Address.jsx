import React from 'react'
import { Box, HStack, Input, ButtonGroup, IconButton, VStack, Text, Image, Button, InputGroup, Heading, Select, useToast } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"

import { useNavigate } from 'react-router-dom'
import { Payment } from './Payment'


export const Address = () => {
    let totalPrice = 0;
    let data = JSON.parse(localStorage.getItem("cart"));
    console.log(data);
    console.log(totalPrice)
    const toast = useToast();
    const navigate = useNavigate();
    return (
        <Box
            paddingY="20px"
            width="70%"
            margin={"auto"}
            // border="1px solid black"
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            h="530px"
            borderRadius="14px"
            bg="#f6f6f7"
            align="center"

        >
            <Text
                fontSize={"25px"}
                fontWeight="bold"
                padding={"12px"}
                borderRadius="8px"
                bg="#151b39"
                color="white"
                align="start"
            >Order Review</Text>

            <HStack align={"start"}

                // marginTop={"40px"}
                // marginLeft="50px"
                
                // border={"1px solid red"}
                margin="auto"
                justifyContent={"space-around"}
                alignItems={'center'}
                padding={"20px"}

            >

                <HStack
                    width={'60%'}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    padding="20px"
                    bg="white"
                    overflow="auto"
                    h="400px"
                    borderRadius={"8px"}


                >
                    <VStack align={"start"} bg="white" mt={"200px"}>
                        <Text color="gray" align={"start"}>PRODUCTS</Text>
                        <VStack w="100%"
                            // className='html'
                            padding={"20px"}
                            // border={"1px solid green"}
                           
                        >
                            {data && data.map((item) => {


                                return (<HStack key={item.prodId}
                                    // border={"1px solid red"}
                                    width={'100%'}
                                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                                    // border="1px solid black"
                                    height={"300px"}
                                    bg="white"
                                    borderRadius={"8px"}>
                                    <Image
                                        width={"40%"}
                                        src={item.prodImage}

                                        alt={item.prodName}
                                    />
                                    {totalPrice += +item.prodPrice}
                                    <VStack align={"start"} bg="white" w="50%" p="5px">
                                        <Text align={"start"}>{item.prodName}</Text>
                                        <Text color={"gray"} fontStyle="italic" align={"start"}>{item.prodBrd}</Text>
                                        <Text align={"start"} fontWeight={"bold"} color="red">$ {item.prodPrice}</Text>
                                        <Text fontSize={"14px"} color="gray" align={"start"}>Delivery between 14 November 20-November </Text>
                                        <Select outline={"none"} width={"80px"} placeholder='Qty:1'>
                                            <option value='option1'>1</option>
                                            <option value='option2'> 2</option>
                                            <option value='option3'> 3</option>
                                        </Select>

                                    </VStack>

                                </HStack>)
                            })}

                        </VStack>

                        <Text color="gray" align={"start"}>DELIVERY ADDRESS </Text>

                        <ButtonGroup size='sm' isAttached variant='outline'>

                            <IconButton padding="24px" color="#24aeb1" aria-label='Add to friends' icon={<AddIcon />} />
                            {/* <Button padding="24px"color="gray">Add New Address</Button> */}
                            <Payment />
                        </ButtonGroup>


                    </VStack>

                </HStack>

                <VStack
                    align={"start"}
                    // border="1px solid black"
                    width={"30%"}
                    padding={"60px"}
                    borderRadius="8px"
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    bg="white"

                >
                    <Text align={"start"} fontWeight={"bold"} color="gray" fontSize="20px">PAYMENT DETAILS</Text>


                    <VStack
                        paddingTop={"40px"}
                        align="start"
                    >

                        <Text alignSelf="start">MRP Total : $ {totalPrice}</Text>

                        <Text alignSelf="start" fontWeight={"bold"}>Total Amount : $ {totalPrice}</Text>

                        <HStack>
                            <Text fontWeight={"bold"}>$ {totalPrice}</Text>
                            <Button
                                color={"white"}
                                bg="black"
                                onClick={() => {
                                    toast({
                                        position: 'top',
                                        title: 'Order Placed.',
                                        description: "Thank you for Placing order.",
                                        status: 'success',
                                        duration: 2000,
                                        isClosable: true,
                                    })
                                    setTimeout(() => {
                                        navigate("/")
                                    }, 2000)
                                }}
                            >PAY</Button>

                        </HStack>



                    </VStack>




                </VStack>
            </HStack>

            <Text
                marginTop="10px"
                fontSize={"12px"}
                fontStyle="italic"
                color="gray"
            >SkinStore is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read Terms & Conditions</Text>

        </Box>
    )
}