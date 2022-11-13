
import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react';
import { Item } from './Item';




const Products = () => {
   
    return (
        <Box width={"100%"} paddingY="20px">
            <Box width={"80%"} margin={"auto"}  alignSelf={"end"}>
                <Item />
            </Box>
        </Box>
    )
}

export default Products;