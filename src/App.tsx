import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import { theme } from "./theme"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Budget from "./components/budget"
import SideBar from "./components/SideBar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid height={'100vh'} templateAreas={{base: `"main" "sideBar"`, md:  `"main" "sideBar"`, lg: `"sideBar main"`}} gridTemplateRows={{md: '1fr 87px'}} gridTemplateColumns={{lg: '87px 1fr '}}>
      <GridItem display={'flex'} justifyContent={'center'} overflow={'auto'} area={'main'}>
        <Budget/>
      </GridItem>
      <GridItem area={'sideBar'}>
        <SideBar />
      </GridItem>
    </Grid>
  </ChakraProvider>
)
