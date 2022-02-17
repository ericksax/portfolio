import { Heading, Text, Box, Flex, Stack } from "@chakra-ui/react";
import { colors } from "../../styles/colors";


export default function About() {
  return (
  <Box as="main" mx="8" >
    <Stack 
      spacing={16}
        as="section"
        height="100vh"
        w="100%"
        maxW="1024px"
        mt="16"
        mx="auto"
        borderWidth="1px"
        borderColor={ colors.lineBorder.dark }
        borderRadius={16}
        p={8}
        my="16"
      >
      
        <Heading as="h2" w="100%">
          <Text
            bgGradient={colors.linearGradient}
            bgClip="text"
            fontSize="48"
          >
            Sobre Mim
          </Text>
        </Heading>
      
       
        <Box
          as="section"
          borderWidth="1px"
          borderColor={colors.lineBorder.dark}
          borderRadius={16}
          p="8"
   
       
        >
          <Text
            lineHeight="2"
            letterSpacing="2px"
            textAlign="justify"
            color={colors.secundaryText.dark}
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
      
      </Stack>
    </Box>
  );
}
