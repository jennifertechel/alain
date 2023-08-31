import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <Flex
      w='full'
      height='400px'
      bg='brand.300'
      px={24}
      py={20}
      pos='relative'
      justifyContent='center'
      alignItems='center'
    >
      <Box w='50%'>
        <Box pos='absolute' top='-5rem'>
          <Image src='/assets/coffee-pour.jpeg' w='40%' borderRadius={16} />
        </Box>
      </Box>
      <Box w='50%' textAlign='left' color='brand.400'>
        <Heading>CONTACT US</Heading>
        <Text>Phone: +467 - 620 090 10</Text>
        <Text pb={8}>E-mail: hello@alain.com</Text>
        <Text>Nilssonsberg 29</Text>
        <Text>411 43 Göteborg</Text>
        <Text>SVERIGE</Text>
      </Box>
    </Flex>
  );
}

export default Contact;
