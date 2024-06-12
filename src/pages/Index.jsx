import { Container, Text, VStack, Heading, Box, Flex, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Financial News
        </Heading>
        
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Top Stories
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} spacing={4}>
            <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
              <Image src="https://via.placeholder.com/600x400" alt="Top story image" mb={2} />
              <Heading as="h3" size="md" mb={2}>Top Story Headline</Heading>
              <Text>Summary of the top story goes here. It should be brief and engaging to attract readers.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box flex="1">
              <Image src="https://via.placeholder.com/600x400" alt="Top story image" mb={2} />
              <Heading as="h3" size="md" mb={2}>Second Story Headline</Heading>
              <Text>Summary of the second story goes here. It should be brief and engaging to attract readers.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </Flex>
        </Box>
        
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={2}>Latest News Headline 1</Heading>
              <Text>Summary of the latest news story goes here.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Latest News Headline 2</Heading>
              <Text>Summary of the latest news story goes here.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Latest News Headline 3</Heading>
              <Text>Summary of the latest news story goes here.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;