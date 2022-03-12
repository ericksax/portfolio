import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useColorMode } from "@chakra-ui/react"
import Link from "next/link"
import { colors } from "../../styles/colors"

export const MenuNav = () => {
    const {colorMode} = useColorMode()
    return(
        <Breadcrumb
        separator=""
        h="100%"
        alignItems="center"
        display="flex"
        spacing={["2", "3", "5"]}
        color={
          colorMode === "light" ? colors.text.dark : colors.text.light
        }
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/about">
            Sobre
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/projetos">
            Projetos
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/contacts">
            Contatos
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    )
}