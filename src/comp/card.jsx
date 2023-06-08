import React, { useState } from 'react';
import { Flex, Box, chakra, Image } from '@chakra-ui/react';

function Card(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Flex  className='flex-1'
    w="full"
    h="full"
    alignItems="center"
    justifyContent="center"
    borderRadius="20px"
    
    >
      <Box
        maxW="md"
      
        mx="auto"
        bg="gray.800"
        shadow="lg"
        rounded="lg"
        
      >
        <Box px={4} py={2}>
          <chakra.h1
            color="white"
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
           {props.name}
          </chakra.h1>
         <Image
          h={props.imgsize}
          w="full"
          fit="cover"
          mt={2}
          src={props.img}
          
        />
        </Box>
  <chakra.p
            m={3}
            fontSize="md"
            color="white"
          >
         {props.desc}
          </chakra.p>
       

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
        
          <chakra.button
            p={2}
            m={2}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
            onClick={handleExpandClick}
          >
            {isExpanded ? 'Collapse' : 'Show More'}
          </chakra.button>
        </Flex>

        {isExpanded && (
          <Box px={4} py={2}>
            <chakra.p mt={2} fontSize="md" color="white">
             {props.more}
            </chakra.p>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default Card;
