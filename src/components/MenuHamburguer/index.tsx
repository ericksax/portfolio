import { Button, Flex, Icon, useColorMode } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ToggleTheme = () => {
    const {colorMode, toggleColorMode} = useColorMode()
   
    return(
        <Flex align="center" padding=" 0 0.25rem">
        <Button
          variant="unstyled"
          onClick={toggleColorMode}
          display="flex"
        >
          {colorMode === "light" ? (
            <Icon as={FaSun} h="6" w="6" />
          ) : (
            <Icon as={FaMoon} color="gray.500" h="5" w="5" />
          )}
        </Button>
      </Flex>
    )
}