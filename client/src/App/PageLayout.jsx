import React, { useEffect, useState } from "react";

import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";


import Header from "./Header"; 


import { useSelector } from "react-redux";
// import AccountSideIcon from "./AccountSideIcon";
// import LogisticSideIcon from "./LogisticSideIcon"
import AdminSidebar from "./AdminSidebar";
// import TrainerSideIcon from "./TrainerSideIcon";
import Axios, { baseURL } from "../utils/baseUrl";
// import MarketingSideIcon from "./MarketingSideIcon";

// import crmlogo from  '../assets/images/homelogo.png'
import Default from "./Default";

export default function PageLayout({Outlet}) {
  // const auth = useSelector((state) => state.authReducer);

  const { isOpen, onOpen, onClose } = useDisclosure();

  



  return (
    <>
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      w={"100%"}
      position="absolute"
    >
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Header onOpen={onOpen} />
      <Box mt="100px" ml={{ base: 0, md: 60 }}>
        
       {/* <MainRoutes /> */}
       <Box m={5}  bg='white' >
    
       {Outlet}
       
       </Box>
      </Box>
    </Box>
    </>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {

  const auth = useSelector((store)=>store.authReducer)

  const [webimg, setwebimg] = useState('')


  const styles = `
  
  ::-webkit-scrollbar {
    width: 8px; /* width of the scrollbar */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* color of the scrollbar track */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #C1C1C1; /* color of the scrollbar handle */
    border-radius: 4px; /* rounded corners of the scrollbar handle */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* color of the scrollbar handle when hovered */
  }
`;

  return (
    <>
    <Box
  transition="3s ease"
  bg={useColorModeValue("white", "gray.900")}
  borderRight="1px"
  borderRightColor={useColorModeValue("gray.200", "gray.700")}
  w={{ base: "full", md: 60 }}
  pos="fixed"
  h="full"
  overflowY="auto" // add overflow-y: auto to enable scrolling
  css={styles}
  {...rest}
    >
<Flex
  h="20"
  alignItems="center"
  mx="full"
  justifyContent="space-between"
  pos="sticky"
  top="0"
  bg={useColorModeValue("white", "gray.900")}
  zIndex="10"
  px="4"
  borderBottom="1px solid"
  borderRight='none'
  borderBottomColor={useColorModeValue("gray.200", "gray.700")}
>
{/* <Stack direction='row'>

  <Image
    boxSize='50px'
    objectFit='cover'
    src={webimg ? `${baseURL}${webimg}`: `https://via.placeholder.com/150`}
    alt='Dan Abramov'
  /> */}



//   <Box >
//     <Image   src={crmlogo} />
//   </Box>


  <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />

</Flex>


{/* <AdminSideIcon /> */}
  
     
 {auth.roleId?.name=="admin" ? <AdminSideIcon /> : 
 auth.roleId?.name=="superadmin" ?  <AdminSidebar />:
  ""}

    </Box>
    </>
  );
};
  



