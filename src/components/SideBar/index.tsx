import { Flex } from "@chakra-ui/react"
import SideBarItem from "./sideBarItem";
import { ReactComponent as HomeIcon } from '../../svg/home.svg';
import { ReactComponent as ReportsIcon } from '../../svg/report.svg';
import { ReactComponent as ChatIcon } from '../../svg/chat.svg';
import { ReactComponent as Budget } from '../../svg/budget.svg';
import { ReactComponent as ProfileIcon } from '../../svg/profile.svg';




const SideBar = () => {


    return (
        <Flex flexDirection={{base: 'row', sm: 'row', md: 'row', lg: 'column'}} position={{base:'fixed', sm: 'fixed', md: 'fixed', lg: 'initial' }} bottom={'0'} alignItems={{base: 'center', sm: 'center', md: 'center', lg: 'center'}} justifyContent={{base: 'space-around', sm: 'space-around', md:'space-around', lg: 'normal'}} height={{ md: '87px', lg: '100%'}}  width={{base:'100%', sm: '100%', md: '100%', lg: '87px'}}>
            <SideBarItem svg={<HomeIcon/>} name="Home"/>
            <SideBarItem svg={<ReportsIcon/>} name="Reports"/>
            <SideBarItem svg={<ChatIcon/>} name="Chat"/>
            <SideBarItem svg={<Budget/>} name="Budget"/>
            <SideBarItem svg={<ProfileIcon/>} name="Profile"/>
        </Flex>
    )
}

export default SideBar;