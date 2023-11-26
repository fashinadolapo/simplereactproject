import { Box, CircularProgress, CircularProgressLabel, Flex, HStack, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import {ReactComponent as Naira} from '../../svg/naira.svg'
import {ReactComponent as OptionsIcon} from '../../svg/optionsmenu.svg'
import {ReactComponent as FoodAndDrink} from '../../svg/fooddrinks.svg'
import {ReactComponent as PiggyVest} from '../../svg/piggyvest.svg'
import IconWrapper from "../customComponents/iconWrapper"
import CategoryBreakdownItems from "./categoryBreakDownItems"



const Budget = () => {

    const thisMonthPerc = 49;

    return (
        <Box width={{base: '100%', sm: '100%', md: '100%', lg: '900px' }} padding={'20px'}>
            <Box marginBlockEnd={'30px'} as ={'section'}>
                <Heading marginBlockEnd={'28px'} fontSize={'28px'}  as={'h1'} fontWeight={'bold'}> Budget</Heading>

                <HStack  gap={'10px'}>
                    <IconWrapper svg={<Naira/>} size="20px" background={'#0466C833'}/>
                    <Text fontSize={'14px'} color={'#707480'} fontWeight={'400'} >Monthly Budget</Text>
                </HStack>

                <Box borderRadius={'10px'} padding={'20px 8px'} shadow={' 0px 5px 10px 2px #00000008'}>
                    <Text color={'#001233'} fontWeight={'700'} fontSize={'28px'}>₦120,000</Text>
                </Box>
            </Box>

            <Box as = {'section'}>
                <Tabs>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <TabList borderBottomColor={'white'} fontWeight={'400'} fontSize={'16px'}>
                            <Tab>Last Month</Tab>
                            <Tab>This Month</Tab>
                        </TabList>
                        <OptionsIcon/>  
                    </Flex>

                    <TabPanels>
                        <TabPanel>
                        <p>one!</p>
                        </TabPanel>
                        <TabPanel paddingBlock={'33px'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <CircularProgress marginBlockEnd={'21px'}  fontWeight ={'700'} position={'relative'}  trackColor="white" capIsRound={true} thickness={'4px'}  size={'131.25px'} value={thisMonthPerc} >
                                <CircularProgressLabel textColor={'#0466C8'} fontSize={'38px'}>{thisMonthPerc}%</CircularProgressLabel>
                                <Box width={'132px'} height = {'132px'} top= {'0'} left={'0'} bottom={'0'} right={'0'} margin={'auto'} position={'absolute'} display={'inline-block'}  borderRadius={'100%'} border={'solid #0466C866 10px'}/>
                            </CircularProgress>

                            <Text marginBlock={'5px'} fontSize={'14px'} color={'#707480'} fontWeight={'400'}>Amount Spent so far</Text>
                            <Text fontSize={'16px'}  fontWeight={'800'}>
                                <Box color={'#0466C8'} as={'span'}>₦50,000</Box>
                                <Box color={'#67A2DC'}  as={'span'}>/₦120,000</Box>
                            </Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box as = {'section'}>
                <Heading  fontSize={'21px'}  fontWeight={'500'} textColor={'#001233'}>Category Breakdown</Heading>
                <CategoryBreakdownItems amount={'₦20,000'} totalAmount={'₦42000'} percentage={49} categoryName="Food and Drink" background="#F4E9CD" progressColor={'#C89104'} svg={<FoodAndDrink/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
                <CategoryBreakdownItems amount={'₦10,000'} totalAmount={'₦24000'} percentage={20} categoryName="Savings" background="#038A3933" progressColor={'#038A39'} svg={<PiggyVest/>}/>
            </Box>
        </Box>
    )
}

export default Budget;