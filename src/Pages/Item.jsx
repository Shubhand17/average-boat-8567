
import React, { useEffect, useState } from 'react';
import { Box, Grid, SimpleGrid } from "@chakra-ui/react";
import { Card } from './Card';
import axios from 'axios';


export const Item = () => {
    console.log("working");
    const [data, setData] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = () => {
         axios.get("https://beautyskin-api.onrender.com/products")
            .then((r) => {
                console.log(r.data)
                setData(r.data)
            }).catch((e) => {
                console.log(e)
            })
    }
    // getProducts();
    console.log(data, "data in items");
    return (
        <Box>
            <SimpleGrid columns={3} spacing={5}>
                {data && data.map((item) => {
                    return <Card key={item.id} name={item.name} price={item.price} brand={item.brand}  image={item.image} />
                })}
            </SimpleGrid>
        </Box>
    )
}
