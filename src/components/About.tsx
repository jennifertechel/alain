import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    <Flex w='100%' bg='brand.200' px={24} flexDir='column'>
      <Flex pb={8}>
        <Flex py={8}>
          <Box>
            <Image src='/assets/product-1.jpeg' w='80%' borderRadius={16} />
          </Box>
        </Flex>
        <Flex
          textAlign='center'
          alignItems='center'
          flexDir='column'
          justifyContent='center'
          w='50%'
        >
          <Heading>OUR MISSION</Heading>
          <Text py={6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            officiis ex reprehenderit, minima beatae placeat corporis quo vero?
            Vel expedita beatae enim officiis quasi tempore optio facilis
            incidunt suscipit.
          </Text>
          <Button>BUY HERE</Button>
        </Flex>
      </Flex>
      <Flex>
        <Flex
          textAlign='center'
          alignItems='center'
          flexDir='column'
          justifyContent='center'
          w='50%'
        >
          <Heading>NOT YOUR ORDINARY CUP</Heading>
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Flex>
        <Flex py={8}>
          <Box>
            <Image src='/assets/coffee-cups.jpeg' w='80%' borderRadius={16} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
