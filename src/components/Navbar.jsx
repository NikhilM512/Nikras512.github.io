import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, Icon, IconButton, Input, LinkOverlay, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, useColorMode, useDisclosure, VStack } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import {AiOutlineClose} from "react-icons/ai";
import style from "./Icons.module.css"
import Resume from "../Resume/Nikhil_Magar_Resume.pdf"

export const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark"
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const [menuBtnDisplay,setMenuBtnDisplay]=useState("flex")
  const [closeBtnDisplay,setCloseBtnDisplay]=useState("none")

  const OpenDrawer=()=>{
    isOpen ? onClose() : onOpen()
    &&
    isOpen?setMenuBtnDisplay("none"):setMenuBtnDisplay("flex");
    setMenuBtnDisplay("none")
    setCloseBtnDisplay("block")
  }

  const CloseDrawer=()=>{
    isOpen ? onClose() : onOpen();
    setMenuBtnDisplay("flex")
    setCloseBtnDisplay("none")
  }

  const downLoad_Resume_And_Open_In_New_Tab=()=>{
    window.open("https://drive.google.com/file/d/1GJJb4n_n1XwSPl6CJkFe06rRxRpgkF0u/view", "_blank");
    // window.location.href = Resume;
  }

  return (
    <Box id='nav-menu' position={"Sticky"} bg='#8860D0' color={'#ccc'} style={{ color: "purple.500", zIndex: 9999999, top: "1px" }}>
      <Flex w={'100%'} h={'66px'} align={'center'} justifyContent={'space-between'}>
        <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} bgGradient={'linear(to-r,purple,purple.900,purple.800)'} bgClip="text" color="#CCCCCC" size={'lg'} ml={{ base: '5%', sm: '5%', md: '5%', lg: '13%' }}
          fontWeight={'bold'} fontFamily={'monospace'}><h1 style={{ fontSize: "22px" }}>&nbsp;❮&nbsp;<span
            style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "33px" }}>N</span>ikhil&nbsp;/❯&nbsp;</h1>
        </Heading>
        <HStack display={{ base: 'none', md: 'none', lg: 'flex' }} mr={'10'} w={'55%'} justifyContent={'space-evenly'}>
          <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'}><a className="nav-link home" href="#home"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>H</span>ome</a></Heading>
          <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'}><a className="nav-link about" href="#about"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>A</span>bout Me</a></Heading>
          <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'}><a className="nav-link projects" href="#project"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>P</span>rojects</a></Heading>
          <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'}><a className="nav-link skills" href="#skills"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>S</span>kills</a></Heading>
          <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'}><a className="nav-link contact" href="#contact"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>C</span>ontact</a></Heading>
          <Heading className="nav-link resume" id="resume-button-1" _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'}><a 
          id="resume-link-1"
          // target="_blank" 
          // rel="noopener noreferrer" 
          onClick={downLoad_Resume_And_Open_In_New_Tab} 
          href={Resume}
          download
          ><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>R</span>esume</a></Heading>
          <IconButton _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true"></IconButton>
        </HStack>
        <Menu display={{ base: 'none', md: 'none', lg: 'none' }}>
          <MenuButton
            _hover={{ transform: "scale(1.15)", overflow: "hidden", color: "black" }}
            ref={btnRef} colorScheme='teal' 
            onClick={OpenDrawer}
            display={{ base: menuBtnDisplay,sm:menuBtnDisplay, md: menuBtnDisplay, lg: 'none' }}
            as={IconButton}
            aria-label='Options'
            icon={<GiHamburgerMenu />}
            variant='outline'
            color={'#ccc'}
            mr={5}
          />
          <AiOutlineClose id={style.closeIcon} onClick={CloseDrawer} mr={{base:"5%",sm:"5%",md:"5%"}} style={{height:"50%",width:"7%",display:closeBtnDisplay,marginRight:"3%"}}/>
        </Menu>
      </Flex>
      <Drawer
        bg={'red'}
        color={'#ccc'}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg={'#8860D0'}></DrawerHeader>

          <DrawerBody bg={'#8860D0'} color={'#ccc'}>
            <VStack display={{ base: 'flex', md: 'flex', lg: 'flex' }} margin="auto" w={'84%'} h={'100%'} justifyContent={'space-evenly'} >
              <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'} onClick={onClose}><a className="nav-link home" href="#home"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>H</span>ome</a></Heading>
              <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'} onClick={onClose}><a className="nav-link about" href="#about"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>A</span>bout Me</a></Heading>
              <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'} onClick={onClose}><a className="nav-link projects" href="#projects"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>P</span>rojects</a></Heading>
              <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'} onClick={onClose}><a className="nav-link skills" href="#skills"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>S</span>kills</a></Heading>
              <Heading _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'} onClick={onClose}><a className="nav-link contact" href="#contact"><span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>C</span>ontact</a></Heading>
              <Heading className="nav-link resume" id="resume-button-1" _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'md'} onClick={onClose}><a
               id="resume-link-1" 
                // target="_blank" 
                // rel="noopener" 
                // href="https://drive.google.com/file/d/1GJJb4n_n1XwSPl6CJkFe06rRxRpgkF0u/view?usp=sharing"
                onClick={downLoad_Resume_And_Open_In_New_Tab} 
                href={Resume}
                download
                >
              <span style={{ color: "#CCCCCC", fontFamily: 'Courgette', fontSize: "27px" }}>R</span>esume</a></Heading>
              <IconButton _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} size={'lg'} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true"></IconButton>
            </VStack>
          </DrawerBody>

          <DrawerFooter bg={'#8860D0'} display="flex" justifyContent={'center'} alignItems="center">
            <Button _hover={{ transform: "scale(1.25)", overflow: "hidden", color: "black" }} variant='outline' display="block" colorScheme='#8860D0' onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
