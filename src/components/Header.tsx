import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <Flex
      height={"100px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={{ base: 6, md: 16, lg: 24 }}
      position='fixed'
      zIndex='sticky'
      width='100%'
    >
      <Box>
        <Heading fontSize={"3rem"}>ALAIN.</Heading>
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontFamily={"bodoni"}
        display={{ base: "none", md: "flex" }}
        fontSize={"2xl"}
      >
        <Link pr={2}>ABOUT </Link>
        <Link pr={2}>PRODUCTS </Link>
        <Link>CONTACT</Link>
      </Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FiMenu />}
          border={"none"}
          background={"none"}
          fontSize={"5xl"}
          display={{ base: "flex", md: "none" }}
        />
        <MenuList fontFamily={"bodoni"} p={8}>
          <MenuItem as='a' href='#'>
            ABOUT
          </MenuItem>
          <MenuItem as='a' href='#'>
            PRODUCTS
          </MenuItem>
          <MenuItem as='a' href='#'>
            CONTACT
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Header;
