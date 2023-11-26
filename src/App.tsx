
import {
  ChakraProvider,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import { theme } from "./theme"
import Budget from "./components/budget"
import SideBar from "./components/SideBar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid height={'100vh'} templateAreas={{base: `"main" "sideBar"`, sm:  `"main" "sideBar"`, md: `"main" "sideBar"`, lg: `"sideBar main"`}} gridTemplateRows={{base:'1fr 87px', sm: '1fr 87px',md: '1fr 87px', }} gridTemplateColumns={{lg: '87px 1fr '}}>
      <GridItem display={'flex'} justifyContent={'center'} overflow={'auto'} area={'main'}>
        <Budget/>
      </GridItem>
      <GridItem area={'sideBar'}>
        <SideBar />
      </GridItem>
    </Grid>
  </ChakraProvider>
)
