import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <Flex mx={150} my={2} justifyContent={"space-between"} py={6}>
        <Box>ROBINA BAJRACHARYA</Box>
        <nav>
          <List display="flex" gap={6}>
            <ListItem>WORK</ListItem>
            <ListItem>ABOUT</ListItem>
            <ListItem>CONTACT</ListItem>
          </List>
        </nav>
      </Flex>
    </header>
  );
};

export default Navbar;
