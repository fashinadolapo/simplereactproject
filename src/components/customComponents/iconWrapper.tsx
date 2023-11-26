import { Center } from "@chakra-ui/react"
import { ReactElement } from "react";

interface IconWrapperProps {
    svg : ReactElement;
    background? : string;
    size: string;
}

const IconWrapper:  React.FC<IconWrapperProps> = ({svg, background, size}) => {

    return(
        <Center width={size} height = {size}background={background} borderRadius={'100%'}>
            {svg}
        </Center>
    )
}

export default IconWrapper;