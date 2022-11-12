import { Box, HStack, Image, Text, VStack, Heading, Divider, Input } from '@chakra-ui/react'
import React from 'react';
import { Button } from '@chakra-ui/button';


export const Footer = () => {
    return (
        
        <Box height={"600px"} width={"100%"}  >
            
              <Divider/>

            <Box width={"70%"}  margin={"auto"}  >
                <HStack  >
                    <VStack align={"start"}  w="50%" >
                        <Text fontWeight={"bold"} fontSize="14px">Sign up to our email list and receive 20% off your next order</Text>
                        <Button  color={"white"} bg="black" fontSize={"12px"} borderRadius="0" >SIGN UP</Button>
                    </VStack>
                    <VStack align={"start"}  border="0px solid brown" w="60%" paddingTop={"20px"} >
                        <Text fontWeight={"bold"} fontSize="14px" marginStart={"27px"}>Connect with us</Text>
                        <Image w="60%" src="https://wordpress.org/support/files/2020/11/social_icons.png" alt="" />

                    </VStack>
                </HStack>
            </Box>



            <hr />

            <HStack width={"75%"} margin={"auto"} align={"start"} justifyContent={"space-evenly"} >

                <VStack align={"start"} >
                    <Text fontWeight={"bold"}  fontSize="12px">Help & Information</Text>
                    <HStack>
                        <Image w="5%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAB7CAMAAABwzk+5AAAAY1BMVEX///8AAAD7+/v19fUeHh7x8fG7u7tCQkLMzMyamprJyck5OTmAgIA9PT2MjIygoKBRUVFvb28vLy8jIyPDw8MQEBB0dHTV1dUWFhbo6Oji4uKurq6UlJQoKChhYWGoqKhJSUltZfo7AAADi0lEQVRogb2b63aqQAyFmeHiHcGCKFjk/Z+yVWuX4kyyRxL337N6vjKXZLKTRpFT2X5XD6fG/Y8qqhJzU5l+Cpmbf33PP0K0vXlU9QFkPDPP0v/S9muENPVRGVnVY6QxK13k4pX4q7Umcu1EGrPUQ/YepKljLWTpQxqzV0L6FlZxdc8U0qw0Vrchkcbk8sj4JRSMJZ9jyM28qpBGzlmkMWdZpB3Hdadkc2mHIGVDYLyCmKYVZGKfKRuNoN28SC4wIIf2Jrmju4eZGymkTXjYXVLXZYkjTSfEPAUwpSL9LoApdFtsANKUMkwucWp8ZxbCFNrPbQgzk2Hy2fpBVobpfdQ6JJXNhgCmVIwPuJ5ipSgebRdSyOiAIrdiyOgbRApdk6s2EPEgWuEXCHIl+fwiK8B/FcI2Uc4j5Q7sn9iH5kF2XS/i8kohFGMf1dLIjYqVQDN1rE0y4CqZF+TBVTL7qEOk5fUdHRbfXTMtM4qoPgeFi3IV8QpTsYUuol64at4tkc7UTGq3a3uVgv11ExH+1A4R9cZVW9zKzxSqxF5FGUTy2fNPxCnSsqij2M9UymYRaSqIm6h3pcSHSr6mn0RlUa07Su2o2n0hjq7e6hJMtfRCPa7Vzi7lVp+UmKQ7pbWlpG2jFI5Sqpm0UxobIOulQYdJF8BKoeFIOjdKh5euRqWs8ZHoJoTOUIal/SLwSdZ023OGH3Sm7gag7f2eH05onKYb23w3/SkTl+ATjnF06T1Nx4UIdthjxl6lQm/7WsxiHhrXivBfGXdPCmrtcT6Vzxjz/dwaKWM5Q84dBv3PmwI5wJzbuXH8J1TjLQE21bI2/cumMo0a4GJTbspNxfOvzvaGAG8d6KPtH6hAawjoziCNtL667uuxg7oXJV8QQJ20ZFYUA9ov6fk7A1jYgQKgiFcfCOWXN6SBh4kv221IBw8TH3yxKZ8g8RHJYn2mAAH1ljwUqELElxdpEUlDoWLWQn08WAnCHI87T9QOYgZOFDCCa62Q6RtGeMkeNCNCCdvOmxq4204ryCRIRe5MaD0pcJLC/Rd0+tCrd+aVm0nJbfee0W4nrO/wtm04Ryc3xprUGX/vUyf6lO0bOXX6vFPGznyPJOFR2m3AmKfphUzndIGOWH0Jellph0TDOhd2RJcls8TfuYKXf+wKb8KpiwAzLExplbviRN8p/yWTbbLtut/8rnSdzPr1OSNC6w+LsSw5uqv/8AAAAABJRU5ErkJggg==" alt="" />
                        <Text>Customer Services</Text>
                    </HStack>
                    <HStack>
                        <Image w="5%" src="data:image/png;base64,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" alt="" />
                        <Text>Delivery Services</Text>
                    </HStack>
                    <HStack>
                        <Image w="5%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e8YNWBtFyVurlhvl7sLf01OBJVWr1w_YHqti-AOfEeol_vPIACPSljmKVLlnFUzyxE8&usqp=CAU" alt="" />
                        <Text>Return & Refund</Text>
                    </HStack>
                    <HStack>
                        <Image w="5%" src="data:image/png;base64,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" alt="" />
                        <Text>Help Center</Text>
                    </HStack>

                    <HStack>
                        <Image w="5%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2h9ftn6nvO7wpZO5GwHC9w3_j3wiexxKICw&usqp=CAU" alt="" />
                        <Text>Track my Order</Text>
                    </HStack>
                    <Text>Accessibility</Text>
                    <HStack>
                        <Image w="5%" src="https://t4.ftcdn.net/jpg/02/22/71/43/360_F_222714354_zwlAY2rX542278fjYTY9cFfbFl39gBgV.jpg" alt="" />
                        <Text>Cookie Settings</Text>
                    </HStack>


                </VStack>

                <VStack align={"start"}>
                    <Text fontWeight={"bold"}  fontSize="12px">About SkinStore</Text>
                    <Text>Key Workers Discount</Text>
                    <Text>About Us</Text>
                    <Text>Affiliate Program</Text>
                    <Text>Brand Directory</Text>
                    <Text>Coupon Codes</Text>
                    <Text>Refer A Friend</Text>
                    <Text>Student Discount</Text>
                    <Text>Join SkinStore Experts</Text>
                </VStack>

                <VStack align={"start"}>
                    <Text fontWeight={"bold"}  fontSize="12px">Legal</Text>
                    <Text>Cookie Information</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms & Conditions</Text>
                    <Text>Modern Slavery Statement</Text>
                </VStack>

                <VStack align={"start"}>
                    <Text fontWeight={"bold"}  fontSize="12px">How To Contact Us</Text>
                    <Text>Message Us</Text>
                    <Text>Free Beauty Consulations</Text>

                </VStack>


            </HStack>
            <Divider width={"78%"} color={"black"} margin={"30px 165px "} orientation='horizontal' />

            <Box width={"70%"}  margin={"auto"}  >
                <HStack  >
                    <VStack align={"start"}  w="50%" >
                        <Text fontSize={"32px"} fontWeight="bolder">THG</Text>
                        <Text fontSize={"10px"} color="gray">2022 © The Hut.com Ltd.</Text>
                    </VStack>
                    <VStack align={"start"}  border="0px solid brown" w="80%" paddingTop={"20px"} >
                        <Text fontWeight={"bold"} fontSize="14px" marginStart={"98px"}>Pay securely with</Text>
                        <Image w="80%"  src="https://cdn.shopify.com/s/files/1/0562/2772/5395/files/align_together_2.jpg?v=1664534660&width=1280" alt="" />

                    </VStack>
                </HStack>
            </Box>
           
        </Box>

    )
}
