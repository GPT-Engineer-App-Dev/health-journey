import { Box, Container, Flex, Heading, VStack, Text, IconButton } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Fitness Tracker</Heading>
        <Flex>
          <IconButton aria-label="Dashboard" icon={<FaChartLine />} variant="ghost" color="white" />
          <IconButton aria-label="Activities" icon={<FaRunning />} variant="ghost" color="white" />
          <IconButton aria-label="Workouts" icon={<FaDumbbell />} variant="ghost" color="white" />
        </Flex>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Dashboard</Heading>
          <Text>Placeholder for fitness metrics</Text>
        </Box>

        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Activity Tracking</Heading>
          <Text>Placeholder for user input and activity tracking</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;