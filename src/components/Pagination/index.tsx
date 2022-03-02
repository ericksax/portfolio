import { Button, HStack, Box, Text } from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import { colors } from "../../styles/colors";

interface PaginationsProps {
  pagination: number[];
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  CurrentPage: number;
}

export const Pagination = ({
  pagination,
  setCurrentPage,
  CurrentPage,
}: PaginationsProps) => {
  return (
    <HStack justify="space-between" m="0 auto" px="8" maxW="1024px">
      <Box>
        <Text>
          {CurrentPage} de {pagination.length}
        </Text>
      </Box>
      <HStack>
        {pagination.map((pages, index) => (
          <Button
            onClick={() => setCurrentPage(pages)}
            size="sm"
            _hover={{ background: { opacity: 0.1 } }}
            bgClip="background"
            bgGradient={colors.linear}
            key={index}
          >
            {pages}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};
