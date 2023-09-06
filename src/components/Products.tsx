import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

function Products() {
  return (
    <Flex
      w='full'
      bg='brand.400'
      px={{ base: 4, md: 10, lg: 24 }}
      flexDir='column'
      alignItems={{ base: "center", md: "flex-end" }}
      py={20}
      pb={{ base: 64, md: 20 }}
    >
      <Box w={{ base: "100%", md: "50%" }} textAlign='center'>
        <Heading>FIND OUR PRODUCTS</Heading>
        <Text py={4}>
          Discover the perfect coffee cups from Alain at select retailers and
          resellers near you. Our thoughtfully designed cups, crafted with
          timeless Scandinavian elegance and sustainable materials, are
          available for purchase through our trusted partners. Experience the
          blend of style, comfort, and eco-consciousness firsthand as you
          explore the shelves of our esteemed retailers. Elevate your coffee
          moments with Alain today.
        </Text>
        <Link textDecoration={"underline"}>LIST OF RETAILERS</Link>
      </Box>
    </Flex>
  );
}

export default Products;
