import {
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

function Footer() {
  return (
    <Flex
      w='full'
      bg='brand.400'
      px={{ base: 4, md: 10, lg: 16 }}
      py={20}
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        pb={{ base: 12, md: 0 }}
        width={{ base: "100%", md: "50%" }}
      >
        <Heading w={{ base: "90%", md: "70%" }}>
          GET UPDATES AND STAY CONNECTED WITH OUR NEWSLETTER
        </Heading>
        <InputGroup w={{ base: "50%" }} pt={{ base: 8 }}>
          <Input
            variant='flushed'
            focusBorderColor='gray.800'
            placeholder='ENTER EMAIL HERE..'
            _placeholder={{ color: "gray.800" }}
            borderColor={"gray.800"}
          />
          <InputRightAddon
            bg={"none"}
            borderTop={"none"}
            borderRight={"none"}
            borderLeft={"none"}
            borderRadius={"none"}
            borderColor={"gray.800"}
          >
            <IconButton
              aria-label='next'
              type='submit'
              bg='none'
              _hover={{ bg: "none" }}
              icon={<FiArrowRight />}
            />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      <Flex
        flexDir='column'
        justifyContent={"center"}
        minW={"50%"}
        px={{ base: 0, lg: 20 }}
      >
        <Heading textAlign={{ base: "center", md: "left" }}>ALAIN.</Heading>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          textAlign={{ base: "center", md: "left" }}
          pt={8}
        >
          <List spacing={4}>
            <ListItem>ABOUT</ListItem>
            <ListItem>PRODUCTS</ListItem>
            <ListItem>CONTACT</ListItem>
          </List>
          <List spacing={4} pt={{ base: 8, md: 0 }}>
            <ListItem>INSPIRATION</ListItem>
            <ListItem>OUR RETAILERS</ListItem>
            <ListItem>TERMS AND CONDITIONS</ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
