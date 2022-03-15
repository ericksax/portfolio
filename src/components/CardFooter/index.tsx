import { Badge, Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface RepositoryProps {
  repository: {
    repo: string;
    description: string;
    link: string;
    image: string;
    owner: string;
    language: string;
  };
}

export const CardFooter = ({ repository }: RepositoryProps) => {
  return (
    <HStack justifyContent="flex-end">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="2"
        cursor="pointer"
      >
        <Link passHref href={repository.link}>
          <FaGithub />
        </Link>
      </Box>

      {repository.language === "JavaScript" && (
        <Badge variant="solid" colorScheme="yellow">
          Javascript
        </Badge>
      )}
      {repository.language === "CSS" && (
        <Badge variant="solid" colorScheme="purple">
          CSS
        </Badge>
      )}
      {repository.language === "TypeScript" && (
        <Badge variant="solid" colorScheme="blue">
          TypeScript
        </Badge>
      )}
    </HStack>
  );
};
