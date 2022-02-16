import { Heading, Text, Box, calc } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export default function About() {
  return (
    <Box h="100vh" m="16">
      <Box
        h="800px"
        w="100%"
        maxW="1024px"
        mt="16"
        mx="auto"
        borderWidth="1px"
        borderColor={theme.colors.brand.lineBorder}
        borderRadius={16}
        p={8}
        my="16"
      >
        <Heading as="h2">
          <Text
            bgGradient="linear(to-r, #2d3bb9, #FF0080, #ff009d)"
            bgClip="text"
            fontSize="48"
          >
            Sobre Mim
          </Text>
        </Heading>
        <Box
          as="section"
          borderWidth="1px"
          borderColor={theme.colors.brand.lineBorder}
          borderRadius={16}
          mt="16"
          p="8"
          h="100%"
        >
          <Text
            lineHeight="2"
            letterSpacing="2px"
            textAlign="justify"
            color={theme.colors.brand.secundaryText}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            perferendis sint illo assumenda laudantium fugit aliquam accusamus,
            provident suscipit accusantium est excepturi possimus dicta beatae
            deleniti at. Dicta, distinctio ut! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corrupti, nemo. Suscipit quos placeat
            natus explicabo rem debitis officia temporibus. Tempore est amet
            quis tenetur debitis ab ratione quidem non placeat?
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
