import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Products() {
  return (
    <Flex w='full' bg='brand.400' px={24} flexDir='column' py={20}>
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

export default Products;
