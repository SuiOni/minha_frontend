import React from 'react';
import { Flex, Text, Icon } from '../priceline-styled-system';

const Navigation = () => (
  <Flex p={2} align="center" color="white" bg="blue">
    <Icon name="hotel" mr={2} />
    <Text bold mx={2}>
      Hello
    </Text>
    <Text ml="auto" mr={2}>
      Right Side
    </Text>
  </Flex>
);

export default Navigation;
