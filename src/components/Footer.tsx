import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex w='full' bg='brand.400' px={24} py={20}>
      <Box w='50%' textAlign='left'>
        <Heading>ALAIN.</Heading>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
      </Box>
      <Box w='50%' textAlign='center'>
        <Heading>SOME OTHER TEXT</Heading>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae esse
          incidunt cupiditate magnam nam suscipit, voluptatum.
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;
