import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Chicago from "../components/Chicago";

const Home = () => {
  return (
    <Flex direction={'column'}  alignItems={"center"}>
    <Header/>

    <Main/>
    <Specials/>
    <Testimonials/>
    <Chicago/>

    </Flex>
  )
}

export default Home