import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Text,
  Link as ChakraLink,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Flex
      p={4}
      borderWidth={1}
      margin={2}
      height="100%"
      width={{ base: "100%", md: "30%" }}
      boxSizing="border-box"
      direction="column"
    >
      <Link to={`/books/${id}`} maxWidth="100px" my={2}>
        <Box>
          <AspectRatio ratio={1 / 1}>
            <Image
              maxWidth="200px"
              margin="auto"
              w={24}
              h={24}
              src={`http://localhost:8000/${image}`}
              alt="Book cover"
            />
          </AspectRatio>
        </Box>
      </Link>
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {title} ({year})
        </Text>
        <Text my={2} color="gray.500">
          <span>Publisher: </span>
          {publisher}
        </Text>
        <Link
          to={`/books/${id}`}
          style={{
            backgroundColor: "teal",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            display: "inline-block",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Details
        </Link>
      </Stack>
    </Flex>
  );
}
