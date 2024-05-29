import { Box, Container, Flex, Heading, VStack, Text, IconButton, Button } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaChartLine, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Fitness Tracker</Heading>
        <Flex>
          <IconButton aria-label="Dashboard" icon={<FaChartLine />} variant="ghost" color="white" />
          <IconButton aria-label="Activities" icon={<FaRunning />} variant="ghost" color="white" />
          <IconButton aria-label="Workouts" icon={<FaDumbbell />} variant="ghost" color="white" />
          <IconButton aria-label="Progress" icon={<FaChartBar />} variant="ghost" color="white" />
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

        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Workout Logging</Heading>
          <Text>Log your workouts to keep track of your progress.</Text>
          <Link to="/workout-log">
            <Button colorScheme="blue" mt={4}>Log a Workout</Button>
          </Link>
        </Box>

        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Progress Tracking</Heading>
          <Text>View your progress over time.</Text>
          <Link to="/progress-tracking">
            <Button colorScheme="blue" mt={4}>View Progress</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;