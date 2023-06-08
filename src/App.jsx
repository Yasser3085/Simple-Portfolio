import React from 'react';
import { Flex, Center } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./comp/navbar";
import Footer from "./comp/footer";
import Card from "./comp/card";
import { ChakraProvider } from '@chakra-ui/react';
import VideoBackground from './comp/videobg';
import MePage from './comp/mepage';

function App() {
  return (
    <ChakraProvider>
      <VideoBackground />

      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<MePage />} />
        </Routes>

        <Footer />
     

    </ChakraProvider>
  );
}

function Home() {
  return (
    <Center h="100vh" className='center' display={'flex'} justifyContent={'center'} alignItems={'center'} direction='column'>
      <Flex className='card-div' height={'80%'} gap={'100px'} direction="row" align="center">
        <Card name='JavaScript' more='JavaScript is widely adopted and supports both front-end and back-end development.' desc='JavaScript is a programming language used for creating dynamic and interactive web content. It runs on the client-side.' img='https://www.freecodecamp.org/news/content/images/2023/02/js.png' />
        <Card name='Python' imgsize='12rem' more=' Python simplicity and extensive libraries make it popular among beginners and experienced developers alike.' desc='Python is a programming language used for various applications, web development, data analysis, and automation.' img='https://w0.peakpx.com/wallpaper/209/515/HD-wallpaper-python-logo-coding-kod-kodlama-code-mobile-lock-programming-thumbnail.jpg' />
      </Flex>
    </Center>
  );
}

export default App;
