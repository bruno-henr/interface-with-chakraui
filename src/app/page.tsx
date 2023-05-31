'use client'
import Content from "@/components/Content";
import { Header } from "@/components/Header";
import { Flex, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection='column'>
      
      <Header />
      
      <Content />
    </Flex>
  )
}
