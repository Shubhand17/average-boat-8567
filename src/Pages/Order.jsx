import { Box, HStack, Input, VStack, Text, Image, InputGroup, Button, Heading, Select, useToast } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Order = () => {
    let totalPrice = 0;
    const toast = useToast();
    let data = JSON.parse(localStorage.getItem("cart"));
    console.log(data);
    console.log(totalPrice)
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
            <Heading>Order Summary</Heading>

            <HStack
                margin="auto"
                w="80%"
                justifyContent={"space-between"}
                alignItems="flex-start"
            // align={"start"}

            // marginTop={"40px"}
            // marginLeft="50px"
            // gap="180px"
            // border={"1px solid red"}
            >
                <VStack w="60%"
                    className='html'
                    padding={"10px"}
                    // border={"1px solid green"}
                    overflow="auto"
                    overflow-y="hidden"
                    h="400px"
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



                <VStack
                    align={"start"}
                    // border="1px solid black"
                    width={"35%"}
                    padding={"40px"}
                    borderRadius="8px"
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    bg="white"
                    h="400px"


                >
                    <Text align={"start"} fontWeight={"bold"} color="gray" fontSize="20px">PAYMENT DETAILS</Text>


                    <VStack
                        paddingTop={"40px"}
                        align="start"
                    >

                        <Text alignSelf="start">MRP Total : $ {totalPrice ? totalPrice : 289}</Text>
                        <Text align="start"> Discount : $12.00</Text>
                        <Text alignSelf="start" fontWeight={"bold"}>Total Amount : $ {totalPrice ? totalPrice - 12 : 289 - 12}</Text>


                        <Link to="/address">
                            <HStack>
                                {/* <Text fontWeight={"bold"}>$ {totalPrice}</Text> */}
                                <Button
                                    color={"white"}
                                    bg="black"
                                >PROCEED</Button>
                            </HStack>
                        </Link>




                    </VStack>




                </VStack>
            </HStack>

            <Text
                marginTop="10px"
                fontSize={"12px"}
                fontStyle="italic"
                color="gray"
            >BeautyStore is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read Terms & Conditions</Text>

        </Box>
        // <Box
        //     paddingY="20px"
        //     width="70%"
        //     margin={"auto"}
        //     // border="1px solid black"
        //     boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        //     h="530px"
        //     borderRadius="14px"
        //     bg="#f6f6f7"
        //     align="center"

        // >
        //     <Heading>Order Summary</Heading>

        //     <HStack align={"start"}

        //         marginTop={"40px"}
        //         marginLeft="50px"
        //         gap="180px"

        //     >
        //         {data && data.map((item) => {
        //             return <VStack
        //                 width={'32%'}
        //                 boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        //                 border="1px solid black"
        //                 height={"300px"}
        //                 bg="white"
        //                 borderRadius={"8px"}
        //                 key={item.prodId}


        //             >
        //                 <Image
        //                     width={"40%"}
        //                     src={item.prodImage}

        //                     alt=""
        //                 />
        //                 <VStack align={"start"} bg="white">
        //                     <Text align={"start"}>{item.prodName}</Text>
        //                     <Text color={"gray"} fontStyle="italic" align={"start"}>{item.prodBrd}</Text>
        //                     <Text align={"start"} fontWeight={"bold"} color="black">$ {item.prodPrice}</Text>
        //                     <Text fontSize={"14px"} color="gray" align={"start"}>Delivery between November 14-November 15</Text>
        //                     <Select outline={"none"} width={"80px"} placeholder='Qty:1'>
        //                         <option value='option1'>1</option>
        //                         <option value='option2'> 2</option>
        //                         <option value='option3'> 3</option>
        //                     </Select>

        //                 </VStack>

        //             </VStack>
        //         })}

        //         <VStack
        //             align={"start"}
        //             // border="1px solid black"
        //             width={"30%"}
        //             padding={"60px"}
        //             borderRadius="8px"
        //             boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        //             bg="white"

        //         >
        //             <Text align={"start"} fontWeight={"bold"} color="gray" fontSize="20px">PAYMENT DETAILS</Text>


        //             <VStack
        //                 paddingTop={"40px"}
        //                 align="start"
        //             >

        //                 <Text alignSelf="start">MRP Total : ${item.prodPrice}</Text>
        //                 <Text align="start">Discount : $.12.00</Text>
        //                 <Text alignSelf="start" fontWeight={"bold"}>Total Amount : ${item.prodPrice}</Text>

        //                 <HStack>
        //                     <Text fontWeight={"bold"}>$.68.00</Text>
        //                     <Button
        //                         color={"white"}
        //                         bg="black"
        //                     >PROCEED</Button>
        //                 </HStack>



        //             </VStack>




        //         </VStack>
        //     </HStack>

        //     <Text
        //         marginTop="10px"
        //         fontSize={"12px"}
        //         fontStyle="italic"
        //         color="gray"
        //     >BeautyStore is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read Terms & Conditions</Text>

        // </Box>



    )
}
