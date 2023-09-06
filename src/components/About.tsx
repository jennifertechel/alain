import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { BsCircle } from "react-icons/bs";

function About() {
  return (
    <Flex
      w='100%'
      bg='brand.200'
      px={{ base: 4, md: 10, lg: 16 }}
      py={{ base: 4, md: 16 }}
      flexDir='column'
    >
      <Flex
        pb={{ base: 4, md: 16 }}
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Flex>
          <Box>
            <Image
              src='/assets/product-1.jpeg'
              w={{ base: "540px", lg: "720px" }}
              borderRadius={16}
            />
          </Box>
        </Flex>
        <Flex
          textAlign='center'
          alignItems='center'
          flexDir='column'
          justifyContent='center'
          w={{ base: "100%", md: "50%" }}
          py={{ base: 8, md: 0 }}
        >
          <Heading>OUR MISSION</Heading>
          <Text py={{ base: 6, md: 3, lg: 6 }} px={4}>
            At Alain, we're on a mission to redefine your coffee experience.
            With a deep appreciation for timeless Scandinavian design and a
            commitment to sustainability, we've crafted a collection of coffee
            cups that embody both elegance and eco-friendliness.
            <br />
            <br />
            Join us in embracing the warmth of your favorite beverages with cups
            that mirror your values. Elevate your coffee ritual, honor the
            environment, and let every sip tell a story of craftsmanship and
            care. Welcome to Alain, where every cup is a journey of taste,
            style, and sustainability.
          </Text>
          <Button>BUY HERE</Button>
        </Flex>
      </Flex>
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
      >
        <Flex
          textAlign='center'
          alignItems='center'
          flexDir='column'
          justifyContent='center'
          w={{ base: "100%", md: "50%" }}
          pb={8}
        >
          <Heading pb={4}>NOT YOUR ORDINARY CUP</Heading>
          <List textAlign={"left"} spacing={3}>
            <ListItem>
              <ListIcon as={BsCircle} />
              Timeless scandinavian design
            </ListItem>
            <ListItem>
              <ListIcon as={BsCircle} />
              Recycled ceramic material
            </ListItem>
            <ListItem>
              <ListIcon as={BsCircle} />
              Handmade for unique patterns and shapes
            </ListItem>
            <ListItem>
              <ListIcon as={BsCircle} />
              Dishwasher and microwave safe
            </ListItem>
            <ListItem>
              <ListIcon as={BsCircle} />
              Neatly stackable to save space
            </ListItem>
          </List>
        </Flex>
        <Flex>
          <Box>
            <Image
              src='/assets/coffee-cups.jpeg'
              w={{ base: "540px", lg: "720px" }}
              borderRadius={16}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
