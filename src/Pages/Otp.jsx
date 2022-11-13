import { Box, HStack, Image, InputLeftAddon, Text, VStack, Button, Input, InputGroup, FormHelperText, Divider, PinInputField, PinInput } from '@chakra-ui/react'
import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'

import { Link } from 'react-router-dom'


export const Otp = () => {

    const [otp1, setOtp1] = React.useState("");
    const [otp2, setOtp2] = React.useState("");
    const [otp3, setOtp3] = React.useState("");
    const [otp4, setOtp4] = React.useState("");
    const [otp5, setOtp5] = React.useState("");
    const [otp6, setOtp6] = React.useState("");
    return (
        <div>

            <HStack marginTop={"30px"}>
                <Box
                    padding="40px"
                    width="25%"
                    margin="auto"

                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    h="520px"

                >

                    <FormControl>
                        <Text align={"start"} p="4px" fontSize={"20px"} fontWeight={"bold"}>OTP</Text>
                        <FormLabel marginTop={"30px"}>Enter The 4-digit code send to +91 8896431631</FormLabel>

                        <HStack marginTop={"40px"}> <PinInput>
                            <PinInputField onChange={(e) => setOtp1(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp2(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp3(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp4(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp5(e.target.value)} />
                            <PinInputField onChange={(e) => setOtp6(e.target.value)} />
                        </PinInput> </HStack>

                        <Link to="/signin">
                            <Button marginTop={"30px"} width={"100%"} bg="black" color={"white"}>VERIFY</Button>
                        </Link>


                        <Text align={"start"} marginTop={"20px"} color={"gray"}>Or,Continue with</Text>
                        <HStack
                            justifyContent={"space-between"}
                            w="100%"
                            display={"flex"}
                            marginTop={"60px"}
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

                    </FormControl>


                </Box>



            </HStack>


        </div>
    )
}
