import { HStack ,Link as ChakraLink, LinkProps} from '@chakra-ui/react';
import Logo from '../images/Logo.svg'
import { Outlet, Link as ReactRouterLink } from "react-router-dom";
const Nav = () => {

    return(
        <>
        <HStack justify={"space-between"} maxW={"50%"}>
        <img src={Logo}></img>
            <ChakraLink as={ReactRouterLink} to='/'>HOME</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/about">ABOUT</ChakraLink>
            <ChakraLink as={ReactRouterLink} >MENU</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/reservation">RESERVATIONS</ChakraLink>
            <ChakraLink as={ReactRouterLink} whiteSpace={"nowrap" }>ORDER ONLINE</ChakraLink>
            <ChakraLink as={ReactRouterLink}>LOGIN</ChakraLink>
        </HStack>
        <Outlet/>
        </>
    )
}


export default Nav;