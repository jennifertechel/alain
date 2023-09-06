import { Box, Flex, Heading } from "@chakra-ui/react";

function Hero() {
  return (
    <Flex
      w='full'
      h='100vh'
      bgImage={{
        base: "url(/assets/hero-small.svg)",
        md: "url(/assets/hero-bg.jpeg)",
      }}
      bgSize='cover'
      bgPosition={{ base: "initial", md: "center top" }}
      bgRepeat={"no-repeat"}
      justifyContent='right'
      alignItems={"center"}
    >
      <Box pr={{ base: 6, md: 16, lg: 20 }} pb={{ base: 6, md: 32 }}>
        <Heading
          textAlign={"right"}
          fontSize={{ base: "3.7rem", md: "4.75rem" }}
        >
          BRINGS OUT THE <br />
          JOY IN COFFEE. <br />
          AND OTHER DELIGHTS.
        </Heading>
      </Box>
    </Flex>
  );
}

export default Hero;
