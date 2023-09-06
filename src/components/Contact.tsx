import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <Flex
      w='full'
      bg='brand.300'
      px={{ base: 4, md: 10, lg: 24 }}
      py={20}
      pos='relative'
      justifyContent='center'
      flexDir={{ base: "column", md: "row" }}
      alignItems='center'
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Box
          pos='absolute'
          top={{ base: "-12rem", md: "-20rem" }}
          left={{ base: "7.5rem", md: 10, lg: 24 }}
        >
          <Image
            src='/assets/coffee-pour.jpeg'
            w={{ base: "400px", lg: "473px" }}
            borderRadius={16}
          />
        </Box>
      </Box>
      <Flex
        w={{ base: "100%", md: "50%" }}
        color='brand.400'
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: "300px", md: 0 }}
      >
        <Heading>CONTACT US</Heading>
        <Box pt={4}>
          <Text>Phone: +467 - 620 090 10</Text>
          <Text pb={4}>E-mail: hello@alain.com</Text>
          <Text>Nilssonsberg 29</Text>
          <Text>411 43 Gothenburg</Text>
          <Text>SWEDEN</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Contact;
