import { Container, Box, Heading, Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const articles = [
  {
    title: "Market Hits Record Highs",
    description: "The stock market reached new heights today with major indices showing significant gains.",
    image: "market-highs.jpg",
    link: "#"
  },
  {
    title: "Cryptocurrency Trends",
    description: "An in-depth look at the latest trends in the cryptocurrency market.",
    image: "crypto-trends.jpg",
    link: "#"
  },
  {
    title: "Economic Forecast 2023",
    description: "Experts share their predictions for the economy in the coming year.",
    image: "economic-forecast.jpg",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl" mb={4}>Financial News Today</Heading>
          <Text fontSize="lg">Stay updated with the latest financial news and trends.</Text>
        </Box>

        <HStack spacing={8} justify="center">
          <FaNewspaper size="40px" />
          <FaChartLine size="40px" />
          <FaMoneyBillWave size="40px" />
        </HStack>

        {articles.map((article, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <HStack>
              <Image src={article.image} alt={article.title} boxSize="150px" objectFit="cover" />
              <VStack align="start" p={4}>
                <Heading as="h2" size="md">{article.title}</Heading>
                <Text>{article.description}</Text>
                <Link href={article.link} color="teal.500">Read more</Link>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;