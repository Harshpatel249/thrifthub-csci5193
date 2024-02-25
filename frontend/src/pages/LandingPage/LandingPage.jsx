import { Flex } from "@chakra-ui/react";
import { theme } from "../../theme";

function LandingPage() {

  return (
    <Flex w="100%" minHeight="90vh" backgroundColor={theme.primaryBackground} alignItems="start" justifyContent="center">
      Landing Page
    </Flex>
  )
}

export default LandingPage;