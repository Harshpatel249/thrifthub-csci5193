import { Flex } from "@chakra-ui/react";
import { theme } from "../../theme";

function NavBar() {


  return (
    <Flex alignItems="center" justifyContent="center" as="nav" h="10vh" w="100%" backgroundColor={theme.primaryBackground}>
      Navbar
    </Flex>
  );
}

export default NavBar;
