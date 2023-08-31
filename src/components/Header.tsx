import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      height={"80px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={24}
      position='fixed'
      zIndex='sticky'
      width='100%'
    >
      <Box>
        <Heading>ALAIN.</Heading>
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontFamily={"bodoni"}
        fontSize='2xl'
      >
        <Link pr={2}>ABOUT </Link>
        <Link pr={2}>PRODUCTS </Link>
        <Link>CONTACT</Link>
      </Flex>
    </Flex>
  );
}

export default Header;
