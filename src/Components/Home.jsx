import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Button, Image } from '@chakra-ui/react'
import { SliderKatrina } from './Slider';

export const Home = () => {

    
    const katrinaSlider = [
        {
            image: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/30/Shot38-1180x450-044330.jpeg",
            alt: "",
        },
        {
            image: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg",
            alt: "",
        },
        {
            image: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg",
            alt: "",
        },
        {
            image: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/17/original-1024-STDCRE-42756-SS-WC-Cyber-Waitlist-Site-Assets-1180x450-040317.jpg",
            alt: "",
        },
        
    ]
    
    return (
        <div>
            <Box w={"100%"} bg="#f2f2f2">
               
                <HStack width={"55%"} border="2px solid red" margin={"auto"} padding="8px" justifyContent={"space-between"}>

                    <HStack>
                        <Image width={"11%"} src="data:image/png;base64,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" alt="" />
                        <Text fontSize={"11px"}>FREE US Shipping Over $49</Text>

                    </HStack>
                    <HStack>
                        <Image width={"10%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbdreMA42mOG9re0s2HfBDGbr3K7wBfZqQA&usqp=CAU" alt="" />
                        <Text fontSize={"11px"}>Refer a Friend , get $15</Text>

                    </HStack>
                    <HStack>
                        <Image width={"5%"} src="https://cdn-icons-png.flaticon.com/512/46/46518.png" alt="" />
                        <Text fontSize={"11px"}>New Customers Save 20% - Use Code NEWBIE</Text>

                    </HStack>
                    <HStack  >
                        <Image width={"11%"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADi4uL8/PwaGhp2dnbx8fHu7u74+Pjl5eXX19eWlpZeXl48PDwYGBiKioowMDBNTU2ysrKenp4SEhKEhIRvb28NDQ1DQ0POzs7a2trGxsYqKiofHx+oqKhQUFAE4D5fAAADLUlEQVR4nO3a63KiQBRFYREjiHjDW3Q08/5vOaZSM4lKlW179mmGWut/TvorWmhJBoP48mpaz+aZtvmsnlb5C6uMb7wYiXHfjRZjf+B64+b7bLN29pUrV99nq9ITOPTboN+Nhn7A4pwAmGXnwk3ov0W/WnkBt4mAWbbwARbJgFnms093CYU7D2DgJazy56rCxnpcxCZoJc8/oD+C5jYC0W110Eqef3ZNgubWAtFN5TJoJRGTg+Yu9SebYh+0koiFBM3d6z+IYZspq54efAwbPBGYrhuGLWT79ODAc4T+cBoozD6GzxV2K+2SUBVChAgRIkSI0F345lNCofy3fZVQ6PMXkxyhbQgFITQOoSCExiEUhNA4hIIQGodQEELjEApCaBxCQQiNQygIoXEIBSE0DqEghMYhFITQOISCEBqHUBBC4xAKQmgcQkEIjUMoCKFxCAUhNA6hIITGIRSE0DiEghAah1AQQuMQCkJoHEJBCI1DKAihcQgFITQOoSCExiEUhNA4hIIQGodQEELjEApCaBxCQQiNQygIoXEIBSE0DqEghMYhFITQOISCEBqHUBBC4xAKQmgcQkEIjUMoCKFxCAUhNA6hIITGIRSE0DiEghAah1AQQuMQCkJoHEJBCI27EhZjj4qEwpFPCYUJQogQIUKECBEiRIgQIcJVU+R5XjS/eyp8P/wbcnjvo3B3Neatf8L6Zk7dN+Hy7qXVrGfCX3eDfvVL+N4yKe5u01XhtGXStFfCQ8ukQ6+Ebeuym9QFYdEyqXj8Y/+R8Ngy6dgr4f3DIvZx0VXhtmXStlfC0/3f4fJTr4TZ+m7QR9ygzgqzyc2cSeSc7gpP5dWYyD3aZWF2+nkVJ7HALgsvh9O/l7GMO5J2X3j5nt9Ux6rZvTJCL4y9Q1h1e8eyr9gnBe7bTri2lcukwmX5eImvFvsKyabbF1qKmqTCxkEY97XOKv3H8NJLN/sX2z1enkEpL6LLJYz9YmfRwgc4GKwSAVdewEFxTgI8O+3Rz4abBMC5/kj6o9J/o64cTjNXrX0v4+b+NYi88WL0eGFGjRZjf+ClvJrWs7kYN5/V0+qV/5j/A0yhSG4wfo1TAAAAAElFTkSuQmCC" alt="" />
                        <Text fontSize={"11px"}>Download Our App</Text>

                    </HStack>

                </HStack>

               
            </Box>
            

            <HStack w="70%" bg={"black"} margin="auto" marginTop={"10px"}>
                <Text color={"white"} fontWeight={"bolder"} margin="auto" padding={"8px"} fontSize="16px">
                25% off select brands with code SINGLES + free SkinCeuticals -C E Ferulic 4ml. (Worth $22) @$130 | Shop now >
                </Text>
            </HStack>

            <Box marginTop={"5px"}>
                <SliderKatrina data={katrinaSlider} />
                </Box>

            <Box w="80%" border={"2px solid pink"} margin="auto">
                <VStack >
                    <Text fontSize={"32px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"} lineHeight="1.2">Shop by Category</Text>
                    <HStack width={"78%"} border="1px solid red" justifyContent={"space-around"} >



                        <Image width="15%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png" alt="" />
                        <Image width="15%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png" alt="" />
                        <Image width="15%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png" alt="" />

                        <Image width="15%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png" alt="" />

                        <Image width="15%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png" alt="" />
                        <Image width="15%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png" alt="" />

                    </HStack>
                </VStack>
            </Box>



            <Box width={"70%"} border="1px solid red" margin={"auto"}>
                <Text fontSize={"32px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"} lineHeight="1.2">Trending Offers</Text>
                <HStack marginTop={"12px"}>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg" alt="" />
                        <Text >Shop SkinCeuticals Skincare</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png" alt="" />
                        <Text >25% off Elemis with code SINGLES</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button  fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-BABOR.AMPOULES-112223.jpg" alt="" />
                        <Text >40% off BABOR Ampoules</Text>
                        <Text color={"#2e3337"} fontSize={"12px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}>
                            Plus, receive a Free BABOR 3 Piece Power Serum Ampoule Set (worth $30) when you spend $100+ on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                </HStack>
            </Box>
            <Box width={"70%"} border="1px solid red" margin={"auto"}>

                <HStack marginTop={"12px"}>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg" alt="" />
                        <Text >Up to 50% off TriPollar</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg" alt="" />
                        <Text >25% off Neocutis with code SINGLES</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg" alt="" />
                        <Text >30% off Christophe Robin + Gift</Text>
                        <Text color={"#2e3337"} fontSize={"12px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}>
                            Plus, receive a Free BABOR 3 Piece Power Serum Ampoule Set (worth $30) when you spend $100+ on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                </HStack>
            </Box>
            <Box width={"70%"} border="1px solid red" margin={"auto"}>

                <HStack marginTop={"12px"}>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png" alt="" />
                        <Text >25% off Elemis with code SINGLES</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/43/Untitled_design_%2813%29-051843.jpg" alt="" />
                        <Text > Up to 40% off ESPA</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg" alt="" />
                        <Text >25% off Perricone MD with code SINGLES</Text>
                        <Text color={"#2e3337"} fontSize={"12px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}>
                            Plus, receive a Free BABOR 3 Piece Power Serum Ampoule Set (worth $30) when you spend $100+ on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                </HStack>
            </Box>

            < Box width={"70%"} border="1px solid red" margin={"auto"}>
                <Text fontSize={"32px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"} lineHeight="1.2">What People Are Buying Right Now</Text>
                <HStack marginTop={"12px"}>
                    <VStack>
                        <Image width={"70%"} src="https://static.thcdn.com/images/small/webp//productimg/480/480/13524404-5734930150395321.jpg" alt="" />
                        <Text >Epionce Luminous Eye Serum 0.53ml</Text>
                        <Text>$67.00</Text>

                        <Button  fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid" >SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image width={"70%"} src="https://static.thcdn.com/images/small/webp//productimg/480/480/12448076-8695002190173929.jpg" alt="" />
                        <Text >Grow Gorgeous Hair Density</Text>
                        <Text >$49.00</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image width={"70%"} src="https://static.thcdn.com/images/small/webp//productimg/480/480/13920999-1114993397470335.jpg" alt="" />
                        <Text >Sunday Rilley Morning Buzz Vitamin C </Text>
                        <Text >$98.00</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                    <VStack>
                        <Image width={"70%"} src="https://static.thcdn.com/images/small/webp//productimg/480/480/12358556-1974888087906815.jpg" alt="" />
                        <Text >TriPollar STOP X Device - Rose Gold</Text>
                        <Text >$199.75</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">SHOP NOW</Button>
                    </VStack>
                </HStack>
            </Box>

            <Box width={"70%"} border="1px solid red" margin={"auto"}>
                <HStack marginTop={"14px"} border="1px solid green" justifyContent={"space-around"}>
                    <Image  width={"14%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png" alt="" />
                    <Image  width={"14%"}src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png" alt="" />
                    <Image width={"14%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png" alt="" />
                    <Image  width={"14%"}src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png" alt="" />
                    <Image  width={"14%"}src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png" alt="" />
                    <Image  width={"14%"}src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png" alt="" />
                  
                </HStack>

            </Box>

            <Box width={"70%"} border="1px solid red" margin={"auto"}>
                <Text fontSize={"32px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"} lineHeight="1.2">Over On the Blog...</Text>
                <HStack marginTop={"12px"}>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg" alt="" />
                        <Text  fontWeight={"semibold"}>SkinCeuticals: Vitamin C Beyond the Face</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">READ MORE</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg" alt="" />
                        <Text fontWeight={"semibold"} >Which TriPollar Device is Right for You?</Text>
                        <Text color={"#2e3337"} fontSize={"12px"}>Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">READ MORE</Button>
                    </VStack>
                    <VStack>
                        <Image style={{ border: '1px solid red', borderRadius: '50%' }} width={"90%"} src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg" alt="" />
                        <Text fontWeight={"semibold"}>Discover Nature Bisse</Text>
                        <Text  color={"#2e3337"} fontSize={"12px"} fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}>
                            Plus, receive a Free BABOR 3 Piece Power Serum Ampoule Set (worth $30) when you spend $100+ on the brand.</Text>
                        <Button fontWeight={"hairline"} color={"#2e3337"} fontSize="12px" bg="white" borderRadius={"0"} border="1px solid">READ MORE</Button>
                    </VStack>
                </HStack>
            </Box>
        </div>
    )
}
