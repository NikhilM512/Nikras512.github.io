import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, Icon, IconButton, Input, LinkOverlay, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, useColorMode, useDisclosure, VStack} from "@chakra-ui/react"
import { FaMoon, FaSun} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'
import React, { useState } from "react";
// import MoonIcon from 'react-icons/md'
// import {CloseIcon} from '@chakra-ui/icons'

export const Navbar=()=>{

    const { colorMode,toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark"
    const [close,setClose]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();


    return(
        <Box id='navbar' position={"Sticky"} bg='purple.700' color={'#ccc'} style={{color:"purple.500",zIndex: 9999999,top: "1px"}}>
       <Flex w={'100%'} h={'66px'} align={'center'} justifyContent={'space-between'}>
        <Heading color={'#ccc'} size={'lg'} ml={'8'} fontWeight={'bold'}><h1>Nikhil</h1></Heading>
       
       {/* <Spacer></Spacer> */}
        <HStack display={{ base: 'none', md: 'none', lg: 'flex' }} mr={'10'} w={'44%'} justifyContent={'space-evenly'}>
            <Heading size={'md'}><a href="#header-sec">Home</a></Heading>
            <Heading size={'md'}><a href="#aboutme-sec">About Me</a></Heading>
            <Heading size={'md'}><a href="#projects-sec">Projects</a></Heading>
            <Heading size={'md'}><a href="#skills-sec">Skills</a></Heading>
            <Heading size={'md'}><a href="#contact-sec">Contact</a></Heading>
            <Heading size={'md'}><a target="_blank" rel="noopener" href="https://drive.google.com/file/d/1GJJb4n_n1XwSPl6CJkFe06rRxRpgkF0u/view?usp=sharing">Resume</a></Heading>
            <IconButton onClick={toggleColorMode} icon={isDark?<FaSun/>:<FaMoon/>} isRound="true"></IconButton>
            {/* <Icon as={MoonIcon}></Icon> */}
            {/* <MoonIcon /> */}
        </HStack>
        <Menu display={{ base: 'none', md: 'none', lg: 'none' }}>
        <MenuButton
            ref={btnRef} colorScheme='teal' onClick={onOpen}
            display={{ base: 'flex', md: 'flex', lg: 'none' }}
            as={IconButton}
            aria-label='Options'
            icon={<GiHamburgerMenu/>}
            variant='outline'
            color={'#ccc'}
            mr={5}
        />
        {/* <MenuList>
            <MenuItem>
            <Heading size={'md'}><a href="#header-sec">Home</a></Heading>
            </MenuItem>
        </MenuList> */}
        </Menu>
        </Flex>
        <Drawer
            bg={'red'}
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
             <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={'purple.700'}></DrawerHeader>

          <DrawerBody bg={'purple.700'}>
          <VStack display={{ base: 'flex', md: 'flex', lg: 'flex' }} mr={'10'} w={'84%'} h={'100%'} justifyContent={'space-evenly'} >
            <Heading size={'md'} onClick={onClose}><a href="#header-sec">Home</a></Heading>
            <Heading size={'md'} onClick={onClose}><a href="#aboutme-sec">About Me</a></Heading>
            <Heading size={'md'} onClick={onClose}><a href="#projects-sec">Projects</a></Heading>
            <Heading size={'md'} onClick={onClose}><a href="#skills-sec">Skills</a></Heading>
            <Heading size={'md'} onClick={onClose}><a href="#contact-sec">Contact</a></Heading>
            <Heading size={'md'} onClick={onClose}><a target="_blank" rel="noopener" href="https://drive.google.com/file/d/1GJJb4n_n1XwSPl6CJkFe06rRxRpgkF0u/view?usp=sharing">Resume</a></Heading>
            <IconButton onClick={toggleColorMode} icon={isDark?<FaSun/>:<FaMoon/>} isRound="true"></IconButton>
            {/* <Icon as={MoonIcon}></Icon> */}
            {/* <MoonIcon /> */}
        </VStack>
          </DrawerBody>

          <DrawerFooter bg={'purple.700'} display="flex" justifyContent={'center'} pr={'40%'}>
            <Button variant='outline' margin={'auto'} mr={3} colorScheme='purple.700' onClick={onClose}>
              Cancel
            </Button>
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
        </Drawer>
       </Box>
    )
}

    // <Box bg='purple.400' w='100%' p={4} color='white' h='77px'>
        // <HStack position={'sticky'}    justify={'space-between'} align={'center'} bg='#501F3A' w='100%' p={7} pr={'55'} color='#ccc' h='77px'>
        //     <Box>
        //         <h1 style={{fontFamily:"sans",fontSize:'33px',color:"#CB2D6F",fontWeight:"bold",paddingLeft:"250px"}}>Nikhil</h1>
        //     </Box>
        //     <HStack fontWeight={'bold'} fontSize={"xl"} fontFamily={'sans-serif'} justify={'space-evenly'} align={'center'} spacing={33}>
        //         <LinkOverlay href='#'><Text>Home</Text></LinkOverlay>
        //         <LinkOverlay href='#'><Text>About me</Text></LinkOverlay>
        //         <Text>Skills</Text>
        //         <Text>Project</Text>
        //         <Text>Contact</Text>
        //         <Text>Resume</Text>
        //     </HStack>
        // </HStack>
        // </Box>


// import {Box, HStack, LinkOverlay, Text} from "@chakra-ui/react"
// import {Link} from 'react-router-dom'

// export const Navbar=()=>{
    
//     return(
//         <HStack position={'sticky'}  justify={'space-between'} align={'center'} bg='#501F3A' w='100%' p={7} pr={'55'} color='#ccc' h='77px'>
//             <Box>
//                 <h1 style={{fontFamily:"sans",fontSize:'33px',color:"#CB2D6F",fontWeight:"bold",paddingLeft:"250px"}}>Nikhil</h1>
//             </Box>
//             <HStack fontWeight={'bold'} fontSize={"xl"} fontFamily={'sans-serif'} justify={'space-evenly'} align={'center'} spacing={33}>
//                 {/* <Link href='#'><Text>Home</Text></Link>
//                 <Link to='/aboutme'><Text>About me</Text></Link>
//                 <Text>Skills</Text>
//                 <Text>Project</Text>
//                 <Text>Contact</Text>
//                 <Text>Resume</Text> */}
//                 <h3><a href="#Home">Home</a></h3>
//                 <h3><a href="#about">About Me</a></h3>
//                 <h3><a href="">Skills</a></h3>
//                 <h3><a href="">Projects</a></h3>
//                 <h3><a href="">Contact</a></h3>
//                 <h3><a href="https://drive.google.com/file/d/1GJJb4n_n1XwSPl6CJkFe06rRxRpgkF0u/view">Resume</a></h3>
//             </HStack>
//         </HStack>
//     )
// }


// width={[25px,12px,7px]}