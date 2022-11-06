import { Box, Heading, Image, Text } from "@chakra-ui/react"


export const Contact=()=>{
    return(
       <Box id='contact-sec' h={'auto'} pb={'5%'} pt={'5%'} w='100%' color={'#ccc'}>
        <Heading textDecoration={"underline"} color={'purple.700'} fontSize={44}>
            CONTACT ME
        </Heading>
        <Box>
        <Image></Image>
        <Text color='grey' fontSize={[10,20,30]} margin={'auto'} mt={'33px'}>📞 Contact No  : +91-9421167202</Text>
        </Box>
        <Box>
        <Image></Image>
        <Text color='grey' fontSize={[10,20,30]} margin={'auto'} mt={'33px'}>📧 Email Id   :  nikhilmagar1995@gmail.com</Text>
        </Box>
        <Box>
        <Image></Image>
        <Text color='grey' fontSize={[10,20,30]} margin={'auto'} mt={'33px'}>🏠 Address  : Vita, Sangli (Maharashtra)</Text>
        </Box>
        <Box w='20%' h='50px' display='flex' margin={'auto'} mt='44px'  justifyContent={'space-evenly'}>
            <a href="https://github.com/Nikras512"><Image h='100%' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github'></Image></a>
            <a href="https://www.linkedin.com/in/nikhil-512-401131168/"><Image h='100%' src='https://abovethelaw.com/uploads/2016/01/linkedin-logo.png' alt='LinkedIn'></Image></a>
            <a href="mailto:nikhilmagar1995@gmail.com"><Image h='100%' src='https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png' alt='e-Mail'></Image></a>
        </Box>
       </Box>
    )
}