import { HStack, Text, Input, Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getAllBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  const fakeSearch = () => {
  };

  return (
    <VStack spacing={4} p={4} align="center">
      <Text fontSize="xl" fontWeight="bold" color="teal.600">
        Search Your Book
      </Text>
      <HStack spacing={4} mb={4}>
        <Input
          placeholder="Enter book title or author..."
        />
        <Button colorScheme="teal" onClick={fakeSearch}>
          Search
        </Button>
      </HStack>
      <HStack spacing={4} justify="center">
        {books?.books?.map((book) => (
          <Books key={`${book.id} ${book.title}`} {...book} />
        ))}
      </HStack>
    </VStack>
  );
}
