import React from 'react'

import { Box, Flex, Link, chakra} from '@chakra-ui/react';


export default function mepage() {
  return (
    <Flex
  mt={'100px'}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="white"
      _dark={{ bg: "gray.800" }}
      mx={{ lg: 8 }}
      display={{ lg: "flex" }}
      maxW={{ lg: "5xl" }}
      shadow={{ lg: "lg" }}
      rounded={{ lg: "lg" }}
    >
      <Box w={{ lg: "50%" }}>
        <Box
          h={{ base: 64, lg:'full'}}
          rounded={{ md: "md" }}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://avatars.githubusercontent.com/u/118220056?v=4')",
          }}
        ></Box>
      </Box>

      <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
        <chakra.h2
          fontSize={{ base: "2xl", md: "3xl" }}
          color="gray.800"
          _dark={{ color: "white" }}
          fontWeight="bold"
        >
          About  {" "}
          <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
            Me
          </chakra.span>

        </chakra.h2>
        <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
        I am Yasser Alreshoodi, a 24-year-old software engineer. I graduated from Qassim University with a degree in software engineering. I have a strong passion for technology and I am constantly excited to learn new things in this fast-paced industry.
        
        </chakra.p>

        <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
       As a software engineer, I enjoy tackling complex problems and finding innovative solutions. I have a solid understanding of programming principles and I am skilled in various programming languages and frameworks. I am always up-to-date with the latest trends and advancements in the field, as I believe in continuous learning to stay ahead in this rapidly changing world of technology.
        </chakra.p>

        <Box mt={8}>
        
        </Box>
      </Box>
    </Box>
  </Flex>
  );
}

