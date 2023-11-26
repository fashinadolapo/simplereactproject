import { Box, Center, CircularProgress, Flex, Heading, Text } from "@chakra-ui/react"
import { ReactElement } from "react";

interface SideBarItemProps {
    svg : ReactElement;
    name? : string;
}

const SideBarItem:  React.FC<SideBarItemProps> = ({svg, name,}) => {

    return(
        <Flex height={'45px'} marginTop={'20px'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
           {svg}
            <Heading fontSize={'12px'} fontWeight={'450'} textColor={'#C1C4CD'}>{name}</Heading>
        </Flex>
    )   
}

export default SideBarItem;