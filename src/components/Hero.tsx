import { Box, Flex, Heading } from "@chakra-ui/react";

function Hero() {
  return (
    <Flex
      w='full'
      h='100vh'
      bgImage='url(/assets/hero-bg.jpeg)'
      bgSize='cover'
      justifyContent='right'
      alignItems={"center"}
    >
      <Box pr={24}>
        <Heading textAlign={"right"} fontSize={{ base: "4xl", md: "6xl" }}>
          BRINGS OUT THE <br />
          JOY IN COFFEE. <br />
          AND OTHER SHIT.
        </Heading>
      </Box>
    </Flex>
  );
}

export default Hero;
