import { Box, HStack, Image, InputLeftAddon, Text, VStack, Button, Input, InputGroup, FormHelperText, Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'

import { Link } from 'react-router-dom'


export const SignUp = () => {
    const [name, setName] = useState("")
    localStorage.setItem("name", JSON.stringify(name));
    return (
        <div>
            {/* <Box
                border={"1px solid black"}
                w="100%"
               
               backgroundColor="white" position={"sticky"} top="0" zIndex={"10"}

            >
                <Image marginLeft={"200px"} width="12%" src="https://i.ibb.co/XFyZsGS/Michelle-2.png" alt="" />
                <Divider marginTop={"20px"} color="red"></Divider>
                </Box> */}

            <HStack marginTop={"30px"}>
                <Box
                    padding="40px"
                    width="40%"
                    margin="auto"

                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                // h="520px"

                >
                    <FormControl>
                        <Text align={"start"} p="4px" fontSize={"20px"} fontWeight={"bold"}>About You</Text>

                        <Text marginTop={"10px"} align={"start"} p="4px" fontSize={"15px"} fontWeight={"bold"}>Sign Up With</Text>

                        <HStack
                            justifyContent={"space-between"}
                            w="100%"
                            display={"flex"}
                            marginTop={"20px"}
                            align={"center"}


                        >
                            <Box
                                border={"1px solid black"}
                                w="120px"
                                h="40px"

                                borderRadius={"5px"}
                                display="flex"
                                justifyContent={"space-around"}
                                p="6px"
                                color={"gray"}
                                borderColor="gray"
                            >
                                <Image
                                    w="30%"
                                    src="https://www.bietigheim-bissingen.de/fileadmin/_processed_/e/8/csm_facebook_logog_8093ca380a.png"
                                    alt=""

                                />
                                <Text
                                    alignSelf={"center"}

                                >Facebook</Text>

                            </Box>
                            <Box
                                border={"1px solid black"}
                                w="120px"
                                h="40px"

                                borderRadius={"5px"}
                                display="flex"
                                justifyContent={"space-around"}
                                p="6px"
                                color={"gray"}
                                borderColor="gray"
                            >
                                <Image
                                    w="20%"
                                    src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                                    alt=""

                                />
                                <Text
                                    alignSelf={"center"}

                                >Google</Text>

                            </Box>


                        </HStack>
                        <Divider width={"100%"} borderColor="secondary.light" marginTop={"10px"}  ></Divider>


                        <FormLabel marginTop={"30px"}>*Full Name</FormLabel>
                        <Input type='email' onChange={(e) => setName(e.target.value)} />
                        <FormLabel marginTop={"30px"}>*Email address</FormLabel>
                        <Input type='password' />
                        <FormLabel marginTop={"30px"}>* Confirm Email address</FormLabel>
                        <Input type='password' />
                        <FormLabel marginTop={"30px"}>*Password</FormLabel>
                        <Input type='password' />
                        <FormLabel marginTop={"30px"}>*Confirm Password</FormLabel>
                        <Input type='password' />
                        <FormLabel marginTop={"30px"}>*Cell Phone Number </FormLabel>
                        <Input type='password' />
                        <Link to="/otp">
                            <Button marginTop={"30px"} width={"100%"} bg="black" color={"white"}>CONTINUE</Button>
                            <Text align={"start"} marginTop={"10px"} color={"gray"}>By proceeding, you are confirming that you agree to our Terms and Conditions and Privacy Policy</Text>
                        </Link>

                    </FormControl>


                </Box>


            </HStack>


        </div>
    )
}
