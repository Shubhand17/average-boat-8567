import { Box, Divider, HStack, Image, Input, Text } from '@chakra-ui/react'
import "./Navbar.css"

import React from 'react'

const Navbar = () => {



    return (
        <Box width={"100%"} >
            <HStack width={"80%"} border="1px solid black" margin={"auto"} height="80px" justifyContent={"space-around"} >
                <Image width="20%" h="75px" src="https://i.ibb.co/kKxn1tV/Michelle-2.png" alt="" />

                <Input w="38%" borderRadius={"0"} fontSize={"12px"} height={"36%"} placeholder='Search for a product or brand..' />

                <HStack w="20%"  h="30px">
                    <HStack margin={"auto"} width={"fit-content"} justifyContent="center"  >
                        <Image width={"12%"} borderRadius="50%" src="https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg" alt="" />
                        <Text fontSize={"12px"}>Account</Text>
                    </HStack>
                    <HStack margin={"auto"} width={"fit-content"} >
                        <Image width={"12%"} src="data:image/png;base64,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" alt="" />
                        <Text fontSize={"12px"}  >Cart</Text>


                    </HStack>

                </HStack>


            </HStack>
            <Divider />

            <div>
                <div id="navtop1">

                    {/* bottom nav */}
                    <div id="bottomnav">
                        <div><a href="sale.html">Brands</a></div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="makeupCat.html">Holiday</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p onclick="Face()">FACE</p>
                                    <p onclick="Foundation()">Foundation</p>
                                    <p onclick="BBCCCream()">BB & CC Cream</p>
                                    <a href="concealer.html">Concealer</a>
                                    <a href="faceprimer.html">Face Primer</a>
                                    <a href="highlighter.html">Highlighter</a>
                                    <a href="facebrush.html">Face Brushes</a>
                                    <a href="makeuppalette.html">Makeup Palette</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="EYE()">EYE</p>
                                    <p onclick="EyePalettes()">Eye Palettes</p>
                                    <p onclick="Mascara()">Mascara</p>
                                    <a href="eyeliner.html">Eyeliner</a>
                                    <a href="eyebrow.html">Eyebrow</a>
                                    <a href="eyeshadow.html">Eyeshadow</a>
                                    <a href="eyeprimer.html">Eye Primer</a>
                                    <a href="eyebrush.html">Eye Brushes</a>
                                    <a href="contactlens.html">Contact Lenses</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="LIP()">LIP</p>
                                    <p onclick="Lipstick()">Lipstick</p>
                                    <p onclick="LipStain()">Lip stain</p>
                                    <a href="lipgloss.html">Lip Gloss</a>
                                    <a href="lipliner.html">Lip Liner</a>
                                    <a href="lipbalm.html">Lip Balm & Treatment</a>
                                    <a href="lipbrush.html">Lip Brushes</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="CHEEK()">CHEEK</p>
                                    <p onclick="Blush()">Blush</p>
                                    <p onclick="Bronzer()">Bronzer</p>
                                    <a href="highlighter.html">Highlighter</a>
                                    <a href="faceoils.html">Face Oils</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="NAILMAKEUP()">NAIL MAKEUP</p>
                                    <p onclick="NailPolish()">Nail Polish</p>
                                    <p onclick="NailCare()">Nail Care</p>
                                    <a href="manicure.html">Manicure & Pedicure Tools</a>
                                </div>
                                <div class="seconddrop">
                                    {/* <p onclick"MAKEUPACCESSORIES()">MAKEUP ACCESSORIES</p> */}
                                    <p onclick="TweezersEyebrowTools()">Tweezers & Eyebrow Tools</p>
                                    <p onclick="MakeupRemovers()">Makeup Remover</p>
                                    <a href="sponges.html">Sponges & Applicators</a>
                                    <a href="makeupbag.html">Makeup Bags & Travel Cases</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="VEGAN()">VEGAN</p>
                                    <p onclick="Eye()">Eye</p>
                                    <a href="veganface.html">Face</a>
                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="skincareCat.html">Sale</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p onclick="MOISTURIZERS()">MOISTURIZERS</p>
                                    <p onclick="Moisturizers()">Moisturizers</p>
                                    <p onclick="NightCreams()">Night Creams</p>
                                    <a href="mist.html">Mists & Essences</a>
                                    <a href="cccream.html">BB & CC Creams</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="CLEANSERS()">CLEANSERS</p>
                                    <p onclick="FaceWashCleansers()">Face Wash & Cleansers</p>
                                    <a href="makeupremover.html">Makeup Removers</a>
                                    <a href="facewipes.html">Face Wipes</a>
                                    <a href="toners.html">Toners</a>
                                    <a href="sanitizers.html">Hand Sanitizers</a>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="TREATMENTS()">TREATMENTS & HIGH TECH TOOLS</p>
                                    <p onclick="FaceSerums()">Face Serums</p>
                                    <p onclick="CleansingTools()">Cleansing Tools</p>
                                    <a href="eyecream.html">Eye Creams & Treatments</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="MASKS()">MASKS</p>
                                    <p onclick="FaceMasks()">Face Masks</p>
                                    <p onclick="SheetMasks()">Sheet Masks</p>
                                    <a href="eyemask.html">Eye Masks</a>
                                    <a href="nosemask.html">Nose Masks & Strips</a>
                                    <a href="lipmask.html">Lip Masks</a>
                                    <a href="hairmask.html">Hair Masks</a>
                                    <a href="handmask.html">Hand Masks</a>
                                    <a href="footmask.html">Foot Masks</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="BATHSHOWER()">BATH & SHOWER</p>
                                    <p onclick="BodyWashandShowerGel()">Body Wash and Shower Gel</p>
                                    <p onclick="ScrubandExfoliants()">Scrub and Exfoliants</p>
                                    <a href="exfoliators.html">Exfoliators</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="BODYMOISTURIZERS()">BODY MOISTURIZERS</p>
                                    <p onclick="BodyLotionsBodyOils()">Body Lotions & Body Oils</p>
                                    <p onclick="HandCreamFootCream()">Hand Cream & Foot Cream</p>

                                </div>
                                <div class="seconddrop">
                                    <p onclick="VEGAN()">VEGAN</p>
                                    <p onclick="FaceCare()">Face Care</p>
                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="fragranceCat.html">Skin Care</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p onclick="WOMEN()">WOMEN</p>
                                    <p onclick="Perfume()">Perfume</p>
                                    <p onclick="MistsandDeodorants()">Mists and Deodorants</p>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="MEN()">MEN</p>
                                    <p onclick="Perfume()">Perfume</p>
                                    <p onclick="BodySpraysDeodorant()">Body Sprays & Deodorant</p>

                                </div>
                            </div>
                        </div>

                        <div class="dropmenu">
                            <div class="menubar"><a href="haircareCat.html">Hair</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p onclick="SHAMPOOCONDITIONER()">SHAMPOO & CONDITIONER</p>
                                    <p onclick="Shampoo()">Shampoo</p>
                                    <p onclick="Conditioner()">Conditioner</p>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="TREATMENTS()">HAIR STYLING & TREATMENTS</p>
                                    <a href="hairspray.html">Hair Spray & Styling Products</a>
                                    <a href="hairoil.html">Hair Oil</a>
                                    <a href="hairmask.html">Hair Masks</a>
                                    <a href="hairclips.html">Hair Clips</a>

                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="tool_n_brushes.html">Makeup</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p onclick="BRUSHES()">BRUSHES</p>
                                    <p onclick="FaceBrushes()">Face Brushes</p>
                                    <p onclick="EyeBrushes()">Eye Brushes</p>
                                    <a href="lipbrush.html">Lip Brushes</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="TOOLS()">TOOLS</p>
                                    <p onclick="SpongesApplicators()">Sponges & Applicators</p>
                                    <p onclick="FaceTools()">Face Tools</p>
                                    <p href="hairclips.html">Hair Clips</p>
                                    <a href="sharpeners.html">Sharpeners</a>
                                    <a href="tweezers.html">Tweezers & Eyebrow Tools</a>
                                    <a href="eyelash.html">Eyelash Curlers</a>
                                    <a href="accessories.html">Accessories</a>
                                    <a href="brushcleaners.html">Brush Cleaners</a>

                                </div>
                                <div class="seconddrop">
                                    <a href="toolsvegan.html">VEGAN</a>
                                    <a href="facebrush.html">Face Brushes</a>
                                    <a href="eyebrush.html">Eye Brushes</a>
                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="tool_n_brushes.html">Makeup</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p onclick="BRUSHES()">BRUSHES</p>
                                    <p onclick="FaceBrushes()">Face Brushes</p>
                                    <p onclick="EyeBrushes()">Eye Brushes</p>
                                    <a href="lipbrush.html">Lip Brushes</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="TOOLS()">TOOLS</p>
                                    <p onclick="SpongesApplicators()">Sponges & Applicators</p>
                                    <p onclick="FaceTools()">Face Tools</p>
                                    <p href="hairclips.html">Hair Clips</p>
                                    <a href="sharpeners.html">Sharpeners</a>
                                    <a href="tweezers.html">Tweezers & Eyebrow Tools</a>
                                    <a href="eyelash.html">Eyelash Curlers</a>
                                    <a href="accessories.html">Accessories</a>
                                    <a href="brushcleaners.html">Brush Cleaners</a>

                                </div>
                                <div class="seconddrop">
                                    <a href="toolsvegan.html">VEGAN</a>
                                    <a href="facebrush.html">Face Brushes</a>
                                    <a href="eyebrush.html">Eye Brushes</a>
                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="tool_n_brushes.html">Makeup</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <p onclick="BRUSHES()">BRUSHES</p>
                                    <p onclick="FaceBrushes()">Face Brushes</p>
                                    <p onclick="EyeBrushes()">Eye Brushes</p>
                                    <a href="lipbrush.html">Lip Brushes</a>
                                </div>
                                <div class="seconddrop">
                                    <p onclick="TOOLS()">TOOLS</p>
                                    <p onclick="SpongesApplicators()">Sponges & Applicators</p>
                                    <p onclick="FaceTools()">Face Tools</p>
                                    <p href="hairclips.html">Hair Clips</p>
                                    <a href="sharpeners.html">Sharpeners</a>
                                    <a href="tweezers.html">Tweezers & Eyebrow Tools</a>
                                    <a href="eyelash.html">Eyelash Curlers</a>
                                    <a href="accessories.html">Accessories</a>
                                    <a href="brushcleaners.html">Brush Cleaners</a>

                                </div>
                                <div class="seconddrop">
                                    <a href="toolsvegan.html">VEGAN</a>
                                    <a href="facebrush.html">Face Brushes</a>
                                    <a href="eyebrush.html">Eye Brushes</a>
                                </div>
                            </div>
                        </div>
                        <div class="dropmenu">
                            <div class="menubar"><a href="brands.html">New & Trending</a></div>
                            <div class="firstdrop">
                                <div class="seconddrop">
                                    <a href="makeupbrands.html">TOP MAKEUP BRANDS</a>
                                    <a href="sephora.html">Sephora Collection</a>
                                    <a href="lancome.html">Lancôme</a>
                                    <a href="huda.html">Huda Beauty</a>
                                    <a href="benefit.html">Benefit Cosmetics</a>
                                    <a href="Beverly.html">Anastasia Beverly Hills</a>
                                    <a href="bobbi.html">Bobbi Brown</a>
                                    <a href="Smashbox.html">Smashbox</a>
                                    <a href="lauder.html">Estee Lauder</a>
                                    <a href="Nudestix.html">Nudestix</a>
                                    <a href="MAC.html">MAC</a>
                                    <a href="makeupforever.html">Make Up For Ever</a>
                                    <a href="Guerlain.html">Guerlain</a>
                                </div>
                                <div class="seconddrop">
                                    <a href="skincarebrands.html">TOP SKINCARE BRANDS</a>
                                    <a href="lancome.html">Lancôme</a>
                                    <a href="Caudalie.html">Caudalie</a>
                                    <a href="kora.html">Kora Organics</a>
                                    <a href="maio.html">Mario Badescu</a>
                                    <a href="foreo.html">Foreo</a>
                                    <a href="Foreox.html">Foreox</a>
                                    <a href="Shiseido.html">Shiseido</a>
                                    <a href="">Estee Lauder</a>
                                    <a href="Clarins.html">Clarins</a>
                                    <a href="arden.html">Elizabeth Arden</a>
                                    <a href="Clinique.html">Clinique</a>
                                    <a href="Gallinee.html">Gallinee</a>
                                    <a href="Wishful.html">Wishful</a>
                                    <a href="">Sunday Riley</a>

                                </div>
                                <div class="seconddrop">
                                    <a href="frangrancebrands..html">TOP FRAGRANCE BRANDS</a>
                                    <a href="ford.html">Tom Ford</a>
                                    <a href="boss.html">CHugo Boss</a>
                                    <a href="issey.html">Issey Miyake</a>
                                    <a href="zegna.html">Ermenegildo Zegna</a>
                                    <a href="dolce.html">Dolce & Gabbana</a>
                                    <a href="paco.html">Paco Rabanne</a>
                                    <a href="Bvlgari.html">Bvlgari</a>
                                    <a href="Kayali.html">Kayali</a>
                                    <a href="cavalli.html">Roberto Cavalli</a>
                                    <a href="Versace.html">Versace</a>
                                    <a href="Davidoff.html">Davidoff</a>
                                    <a href="klein.html">Calvin Klein</a>
                                    <a href="chopard.html">Chopard</a>
                                    <a href="laurent.html">Yves Saint Laurent</a>
                                    <a href="Burberry.html">Burberry</a>
                                </div>
                                <div class="seconddrop">
                                    <a href="newin.html">NEW IN</a>
                                    <a href="ikoo.html">Ikoo</a>
                                    <a href="ouai.html">Ouai</a>
                                    <a href="juice.html">Juice Beauty</a>
                                    <a href="abhati.html">Abhati Suisse</a>
                                    <a href="kora.html">Kora Organics</a>
                                    <a href="mario.html">Mario Badescu</a>
                                    <a href="moro.html">Moroccanoil</a>
                                    <a href="tiffany.html">Tiffany & Co</a>
                                    <a href="denona">Natasha Denona</a>
                                    <a href="lancome.html">Lancôme</a>
                                    <a href="dahlia.html">Dear Dahlia</a>
                                </div>
                                <div class="seconddrop">
                                    <a href="atoz.html">BRANDS A - Z</a>
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

