import React from 'react'
import { Box, Center , Button} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import { Link ,  useLocation} from 'react-router-dom';
export default function navbar() {

  const location = useLocation();

  return (

    // <ChakraProvider>

  <Box  bg=" rgba(0, 0, 0, 0.4)" color="white" p={5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    {location.pathname === '/me' && (
        <Link to="/">
          <Button>Home</Button>
        </Link>
      )}
    <Box className='svg-div' display="flex"  alignItems='flex-start'  >
      <Box>  <FaReact  size={'50px'}  ></FaReact> </Box>

   

    </Box>
    <Button as={Link} to="/me">About me</Button>
  </Box>

    // {/* </ChakraProvider> */}
    
  
  )
}