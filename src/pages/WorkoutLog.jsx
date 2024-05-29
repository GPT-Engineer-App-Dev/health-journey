import { useState } from "react";
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const WorkoutLog = () => {
  const [workout, setWorkout] = useState({
    type: "",
    duration: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({
      ...workout,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Workout logged:", workout);
    // Reset form
    setWorkout({
      type: "",
      duration: "",
      notes: ""
    });
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={6}>Log Your Workout</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="type" isRequired>
              <FormLabel>Type of Exercise</FormLabel>
              <Input
                type="text"
                name="type"
                value={workout.type}
                onChange={handleChange}
                placeholder="e.g., Running, Weight Lifting"
              />
            </FormControl>
            <FormControl id="duration" isRequired>
              <FormLabel>Duration</FormLabel>
              <Input
                type="text"
                name="duration"
                value={workout.duration}
                onChange={handleChange}
                placeholder="e.g., 30 minutes"
              />
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Additional Notes</FormLabel>
              <Textarea
                name="notes"
                value={workout.notes}
                onChange={handleChange}
                placeholder="e.g., Felt great, need to improve form"
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Log Workout</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default WorkoutLog;