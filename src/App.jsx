import { Box, FormControl, FormLabel } from "@chakra-ui/react";

function App() {
  return (
    <>
    <Box 
    maxW={"400px"}
    borderRadius={5}
    bg={gray.50}
    mx={"auto"}
    p={5}
    boxShadow={"2x1"}
    >
      <Text fontsize={"2x1"} align={"center"} fontWeight={"bold"}>
        Sign Up
      </Text>
      <Stack>
        <FormControl id="name">
          <FormLabel>Name </FormLabel>
          <Input placeholder="Name" borderColor={"gray.400"} />
        </FormControl>
      </Stack>

export default App;
