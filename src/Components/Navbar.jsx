import { Box, Divider, HStack, IconButton, Image, Input, Text } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/button'

import "./Navbar.css"

import React from 'react'

const Navbar = () => {



    return (
       
        <Box width={"100%"} backgroundColor="white" position={"sticky"} top="0" zIndex={"10"} >
            <HStack width={"80%"} border="1px solid black" margin={"auto"} height="80px" justifyContent={"space-around"} >
                <Image width="15%"   src="https://i.ibb.co/XFyZsGS/Michelle-2.png" alt="" />

          
                    <Input w="30%" borderRadius={"0"} fontSize={"12px"} height={"36%"} placeholder='Search for a product or brand..' />
                  
               


                <HStack w="20%" h="30px">
                    <HStack margin={"auto"} width={"fit-content"} justifyContent="center"  >
                        <Image width={"14%"} borderRadius="50%" src="https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg" alt="" />
                        <Text fontSize={"14px"}>Account</Text>
                    </HStack>
                    <HStack margin={"auto"} width={"fit-content"} >
                        <Image width={"14%"} src="data:image/png;base64,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" alt="" />
                        <Text fontSize={"14px"}  >Cart</Text>


                    </HStack>

                </HStack>


            </HStack>
            <Divider />

            <div>
                <div id="navtop1">

                    {/* bottom nav */}
                    <div id="bottomnav">

                        <div class="dropmenu">
                            <div class="menubar"><a href="makeupCat.html">Brands</a></div>
                            <div class="firstdrop">
                                {/* <div class="seconddrop"> */}
                                <div id='brands'>
                                    <div id='b1'>
                                        <hr />
                                        <p>0-9</p>
                                        <p>A</p>
                                        <p>B</p>
                                        <p>C</p>
                                        <p>D</p>
                                        <p>E</p>
                                        <p>F</p>
                                        <p>G</p>
                                        <p>H</p>
                                        <p>I</p>
                                        <p>J</p>
                                        <p>K</p>
                                        <p>L</p>
                                        <p>M</p>
                                        <p>N</p>
                                        <p>O</p>
                                        <p>P</p>
                                        <p>Q</p>
                                        <p>R</p>
                                        <p>S</p>
                                        <p>T</p>
                                        <p>U</p>
                                        <p>V</p>
                                        <p>W</p>
                                        <p>Y</p>
                                        <p>Z</p>
                                    </div>

                                    <div id='b2'>
                                        <p>View all brands</p>
                                    </div>
                                </div>
                                <hr />


                                {/* </div> */}


                            </div>

                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a >Holiday</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <hr />

                                    <p onclick="Face()">Skin Store's Holiday Shop</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="EYE()">Shop all Holiday</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="LIP()">SkinStore's Holiday Edit</p>

                                </div>



                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="skincareCat.html">Sale</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="MOISTURIZERS()">Sale</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="CLEANSERS()">Key Workers Discount</p>


                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="TREATMENTS()">Refer A Friend</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="MASKS()">Clearance</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="BATHSHOWER()">Gifts and Sets</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="BODYMOISTURIZERS()">All Coupons</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="VEGAN()">Featured Offers</p>

                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="fragranceCat.html">Skin Care</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p >Popular Categories</p>
                                    <p >View All Skin Care</p>
                                    <p >New In</p>
                                    <p>Clean Skincare</p>
                                    <p>5* Rated Products</p>
                                    <p>Gifts & Sets</p>
                                    <p>Supersizes & Duo</p>
                                    <p>Travel Sizes</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="MEN()">By Product Type</p>
                                    <p onclick="Perfume()">Cleaners</p>
                                    <p onclick="BodySpraysDeodorant()">Moisturizers</p>
                                    <p>Eye Serum</p>
                                    <p>Exfoliators</p>
                                    <p>Masks</p>
                                    <p>Eye Care</p>
                                    <p>Toners</p>
                                    <p>Lip Care</p>
                                    <p>Oils</p>
                                    <p>Treatments</p>
                                    <p>Mists</p>
                                    <p>Self Tanning</p>
                                    <p>Tools</p>

                                </div>
                                <div class="seconddrop">
                                    <p >By Specific Concern </p>
                                    <p >Acne</p>
                                    <p >Fine Lines & Wrinkles</p>
                                    <p>Dark Circles</p>
                                    <p>Dry Skin</p>
                                    <p>Dullness</p>
                                    <p>Lack of Firmness</p>
                                    <p>Pigmentation</p>
                                    <p>Pregnancy Skincare</p>
                                    <p>Redness & Rosacea</p>
                                    <p>Senstive Skin</p>
                                    <p>Visible Pores</p>


                                </div>
                                <div class="seconddrop">
                                    <p >Sunscreen & Suncare</p>
                                    <p >Take The SPF Quiz</p>
                                    <p >SPF 30 and over</p>
                                    <p>SPF 50 and over </p>
                                    <p>After Sun</p>
                                    <p>Tinted</p>
                                    <p>Mineral</p>
                                    <p>Eye Protection</p>

                                </div>
                            </div>
                        </div>

                        <div class="dropmenu">
                            <div class="menubar"><a href="haircareCat.html">Hair</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p>Popular Categories</p>
                                    <p>View All Hair Care</p>
                                    <p>New In </p>
                                    <p>Clean Hair Care</p>
                                    <p>5* Rated Products</p>
                                    <p>Gifts & Sets</p>
                                    <p>Travel Sizes</p>
                                    <p>Supersize & Duo</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="TREATMENTS()">Product Type</p>
                                    <p>Shampoo</p>
                                    <p>Conditioners</p>
                                    <p>Hair Traetments</p>
                                    <p>Hair Masks</p>
                                    <p>Hair Oils</p>
                                    <p>Hair Sprays</p>
                                    <p>Hair Styling</p>
                                    <p>Hair Thinning & Loss</p>
                                    <p>Hair Color Treatments</p>
                                    <p>Hair Supplements</p>
                                    <p>Hair Brushes & Combo</p>

                                </div>
                                <div class="seconddrop">
                                    <p >Hair Type</p>
                                    <p>Anti-Dandruf & Scalp Care</p>
                                    <p>Coarse & Textured Hair</p>
                                    <p>Colored Hair</p>
                                    <p>Curly & Wavy Hair</p>
                                    <p>Damaged Hair</p>
                                    <p>Dry Hair</p>
                                    <p>Fine Hair</p>
                                    <p>Oily Hair</p>


                                </div>
                                <div class="seconddrop">
                                    <p >Electrical</p>
                                    <p>Flat Irons</p>
                                    <p>Hair Dryers</p>
                                    <p>Rollers & Curling Tongs</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="TREATMENTS()">Hair Removal</p>
                                    <p>Hair Removal Devices</p>
                                    <p>Hair Removal Products</p>
                                    <p>Men's Shaving Products</p>


                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="tool_n_brushes.html">Makeup</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p>Popular Categories</p>
                                    <p>View All Cosmetics</p>
                                    <p>New In </p>
                                    <p>Clean Makeup</p>
                                    <p>5* Rated Products</p>
                                    <p>Gifts & Sets</p>
                                    <p>Brushes & Applications</p>
                                    <p>Makeup paletters</p>
                                    <p>Nails</p>

                                </div>
                                <div class="seconddrop">
                                    <p>Eyes</p>
                                    <p>Eye Liners</p>
                                    <p>Lash & Brow Enhancers</p>
                                    <p>Eye Shadows</p>
                                    <p>Mascaras</p>
                                    <p>Brow Pencils</p>


                                </div>
                                <div class="seconddrop">
                                    <p>Face</p>
                                    <p>BB & CC Cream</p>
                                    <p>Blushers</p>
                                    <p>Bronzers</p>
                                    <p>Color Correctors</p>
                                    <p>Concealers</p>
                                    <p>Contour</p>
                                    <p>Face Powders</p>
                                    <p>Foundations</p>
                                    <p>Highlighters</p>
                                    <p>Makeup Removers</p>
                                    <p>MAkeup Setting Spray</p>
                                    <p>Primers</p>
                                    <p>Tinned Moisturizer</p>



                                </div>
                                <div class="seconddrop">
                                    <p>Lips</p>
                                    <p>Lipsticks</p>
                                    <p>Lip Balms</p>
                                    <p>Lip Glosses</p>
                                    <p>Lip Liners</p>
                                    <p>Lip Plumpers</p>
                                    <p>Liquid Lipstics</p>

                                </div>
                            </div>
                        </div>

                        <div class="dropmenu">
                            <div class="menubar"><a >Tool</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <hr />

                                    <p onclick="Face()">Skin Store's Holiday Shop</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="EYE()">Shop all Holiday</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="LIP()">SkinStore's Holiday Edit</p>

                                </div>



                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="tool_n_brushes.html">Bath & Body</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p>Popular Categories</p>
                                    <p>View All Bath & Body</p>
                                    <p>New In</p>
                                    <p>Clean Bath & Body</p>
                                    <p>5* Rated Products</p>
                                    <p>Travel Sizes</p>
                                    <p>At Home Spa</p>
                                    <p>Deodrants</p>
                                    <p>Gifts & Sets</p>
                                    <p>Oral Care</p>
                                    <p>Mom & Baby</p>


                                </div>
                                <div class="seconddrop">
                                    <p>Bath & Showers</p>
                                    <p>Baths Oils/Soaks</p>
                                    <p>Bath Salts</p>
                                    <p>Body Washes</p>
                                    <p>Cleansing Bars</p>
                                    <p>Exfoliators</p>


                                </div>
                                <div class="seconddrop">
                                    <p>Self Tanners</p>
                                    <p>Accessories</p>
                                    <p>Pre-Tan Prepration</p>
                                    <p>Body Tanners</p>
                                    <p>Post Tanning</p>

                                </div>
                                <div class="seconddrop">
                                    <p>Moisturizers</p>
                                    <p>Balms</p>
                                    <p>Butters</p>
                                    <p>Creams</p>
                                    <p>Lotions</p>
                                    <p>Oils</p>

                                </div>
                                <div class="seconddrop">
                                    <p>Targeted Care</p>
                                    <p>Bust</p>
                                    <p>Cellulite</p>
                                    <p>Dry Skin</p>
                                    <p>Hair Removal</p>
                                    <p>Hand & Foot Care</p>
                                    <p>Hand Soap Sanitizers & Creams</p>
                                    <p>Legs</p>
                                    <p>Slimming & Sculpting</p>
                                    <p>Stretch Marks</p>
                                    <p>Sunscreen</p>

                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="tool_n_brushes.html">Fragrance</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p>Popular Categories</p>
                                    <p>View All Fragrance</p>
                                    <p>New In</p>
                                    <p>5* Rated Products</p>

                                </div>
                                <div class="seconddrop">
                                    <p>Top Brands</p>
                                    <p>NEOM Organics</p>
                                    <p>Glasshouse Fragrance</p>
                                    <p>KORRES</p>
                                    <p>NEST Fragrance</p>
                                    <p>Molton Brown</p>
                                </div>
                                <div class="seconddrop">
                                    <p>Personal Fragnance</p>
                                    <p>Perfume</p>
                                    <p>Eau de Toilette</p>
                                    <p>Body Spray</p>
                                    <p>For Her</p>
                                    <p>For Him</p>

                                </div>
                                <div class="seconddrop">
                                    <p>Home Fragrance</p>
                                    <p>Scented Candles</p>
                                    <p>Diffusers</p>
                                    <p>Aromatherapy</p>
                                    <p>Pillow Mists</p>
                                    <p>Room Sprays</p>

                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="brands.html">New & Trending</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p>Latest brands</p>
                                    <p>Ellis Brooklyn</p>
                                    <p>Act+Acre</p>
                                    <p>Rituals</p>
                                    <p>Juliette Has a Gun</p>
                                    <p>Chris Collins</p>
                                    <p>Cire Trudon </p>
                                    <p>Carriere Freres</p>
                                    <p>Alurx</p>
                                    <p>Lumira</p>
                                    <p>Hermetica</p>
                                    <p>Veronique Gabal</p>
                                    <p>Liquides Imaginaries</p>
                                    <p>Arquiste Perfumer</p>
                                    <p>David Mallett</p>

                                </div>
                                <div class="seconddrop">
                                    <p>View All New</p>
                                    <p>New Skin Care</p>
                                    <p>New Makeup</p>
                                    <p>New Hair Care</p>
                                    <p>New Bath & Body</p>
                                    <p>New Fragrance</p>

                                </div>
                                <div class="seconddrop">

                                </div>
                                <div class="seconddrop">
                                    <p>Trending Now</p>
                                    <p>Best of British Brands</p>
                                </div>

                            </div>
                        </div>

                        <div class="dropmenu">
                            <div class="menubar"><a >Limited Editions</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <hr />

                                    <img src="https://s3.thcdn.com/navigation/121/us/2021/10/original-1013-STDCRE-24165-LD-2021_SkinStore_Holiday_Edit_LTD_Edition_Box_-_BATCHING_Shot3-350x350-20211014.jpg" alt="" />
                                    <p>Skin Store Holiday Edit 2021</p>
                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <img src="https://s2.thcdn.com/navigation/121/2021/08/0802-STDCRE-17730-Skinstore-BME-Skinstore_x_Babor-_LTD_ED_Box-_Photography-BATCHING-Shot_01-600x600-20210825.jpg" alt="" />
                                    <p>BABOR Limited Edition Bag</p>
                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <img src="https://s4.thcdn.com/navigation/121/2021/07/original-12940998-1-20210727.jpg" alt="" />
                                    <p>Experts' Choice Limited edition Bags</p>
                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <img src="https://s2.thcdn.com/navigation/121/us/2021/06/0625-STDCRE-17422-SS-BME-Skinstore_x_Filorga_Ltd_Ed_Box-_Photography-Assets-Shot_03-600x600-20210630.jpg" alt="" />
                                    <p>Filorga Limited Edition Collection</p>
                                </div>



                            </div>
                        </div>

                        <div class="dropmenu">
                            <div class="menubar"><a >New</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <hr />

                                    <p onclick="Face()">Skin Store's Holiday Shop</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="EYE()">Shop all Holiday</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="LIP()">SkinStore's Holiday Edit</p>

                                </div>



                            </div>
                        </div>

                        <div class="dropmenu">
                            <div class="menubar"><a >Advice</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <hr />

                                    <p onclick="Face()">Skin Store's Holiday Shop</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="EYE()">Shop all Holiday</p>

                                </div>
                                <div class="seconddrop">
                                    <hr />
                                    <p onclick="LIP()">SkinStore's Holiday Edit</p>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Navbar

