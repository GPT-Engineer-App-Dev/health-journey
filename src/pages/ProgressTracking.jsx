import { Box, Container, Heading, VStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ProgressTracking = () => {
  const [progress, setProgress] = useState({
    totalWorkouts: 0,
    totalDuration: 0,
    averageDuration: 0,
  });

  useEffect(() => {
    // Fetch progress data from local storage or API
    const fetchProgress = () => {
      // Placeholder data
      const data = {
        totalWorkouts: 10,
        totalDuration: 300, // in minutes
        averageDuration: 30,
      };
      setProgress(data);
    };

    fetchProgress();
  }, []);

  return (
    <Container maxW="container.md" p={4}>
      <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={6}>Your Progress</Heading>
        <VStack spacing={4}>
          <Box w="full" p={4} bg="white" borderRadius="md" boxShadow="sm">
            <Heading size="md">Total Workouts</Heading>
            <Text fontSize="xl">{progress.totalWorkouts}</Text>
          </Box>
          <Box w="full" p={4} bg="white" borderRadius="md" boxShadow="sm">
            <Heading size="md">Total Duration</Heading>
            <Text fontSize="xl">{progress.totalDuration} minutes</Text>
          </Box>
          <Box w="full" p={4} bg="white" borderRadius="md" boxShadow="sm">
            <Heading size="md">Average Duration</Heading>
            <Text fontSize="xl">{progress.averageDuration} minutes</Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default ProgressTracking;