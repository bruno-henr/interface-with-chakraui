import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image';

interface ItemProps {
    icon: any;
    name: string
}

const Item: React.FC<ItemProps> = ({ icon, name }) => {
  return (
    <Flex
      w="50"
      h="20"
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection="column"
    >
      <Image alt="" src={icon} sizes="20" />
      <Text fontWeight={'semibold'} fontSize='md'>{name}</Text>
    </Flex>
  );
};

export default Item;
