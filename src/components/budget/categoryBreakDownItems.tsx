import { Box, Center, CircularProgress, Flex, Heading, Text } from "@chakra-ui/react"
import { ReactElement } from "react";

interface CategoryBreakdownItemsProps {
    svg : ReactElement;
    background? : string;
    size?: string;
    progressColor? : string;
    categoryName: string;
    percentage: number;
    amount: string;
    totalAmount: string;
}

const CategoryBreakdownItems:  React.FC<CategoryBreakdownItemsProps> = ({svg, background, size, progressColor, categoryName, percentage, totalAmount, amount}) => {

    return(
        <Flex marginTop={'20px'} justifyContent={'space-between'} alignItems={'center'}>
            <Flex  gap={'12px'}>
                <Box height={'61px'}>
                    <CircularProgress color={progressColor}  fontWeight ={'700'} position={'relative'}  trackColor="white" capIsRound={true} thickness={'4px'}  size={'60px'} value={percentage} >
                        <Center background={background} width={'46px'} height = {'46px'} top= {'0'} left={'0'} bottom={'0'} right={'0'} margin={'auto'} position={'absolute'}  borderRadius={'100%'}>
                            {svg}
                        </Center>
                    </CircularProgress>
                </Box>
                <Flex paddingBlock={'5px'} flexDirection={'column'} justifyContent={"space-around"}>
                    <Heading fontSize={'14px'}  fontWeight={'500'} textColor={'#001233'}> {categoryName}</Heading>
                    <Text  fontSize={'14px'}  fontWeight={'400'} textColor={'#707480'}>{percentage}%</Text>
                </Flex>
            
            </Flex>

            <Text fontSize={'16px'}  fontWeight={'800'}>
                <Box color={'#001233'} as={'span'}>{amount}</Box>
                <Box color={'#C1C4CD'}  as={'span'}>/{totalAmount}</Box>
            </Text>
        </Flex>
    )   
}

export default CategoryBreakdownItems;