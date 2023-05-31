"use client"
import { Header } from "@/components/Header";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import BannerContinents from '../../../../public/assets/BannerContinent.png'
import Londres from '../../../../public/assets/Londres.png'
import Paris from '../../../../public/assets/Paris.png'
import Roma from '../../../../public/assets/Roma.png'
import Praga from '../../../../public/assets/Praga.png'
import Amsterda from '../../../../public/assets/Amsterdã.png'
import Image from 'next/image';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Stack>
      <Flex w="100vw">
        <Header buttonBack={true} href='/' />
      </Flex>
      <Image alt='' src={BannerContinents} sizes="100vw" />

      <Flex w="100vw" justifyContent={'center'}>
        <Flex w="80vw" pt='2rem' pb='2rem' gap='1'>
          <Flex alignItems={'center'}>
            <Text textAlign={'justify'} w='50%'>
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
            <Box>

            <HStack
              spacing={'12'} 
              display={'flex'} 
              justifyItems={'center'} 
              alignItems={'center'} 
              justifyContent={'space-between'}
              p='12'
              width={'100%'}
              maxWidth={'978px'}
            >
              <Flex flexDirection={'column'} alignItems='center' justifyContent={'center'}>
                <Text fontSize={'1.5rem'} fontWeight='medium' color='yellow.600'>50</Text>
                <Text>países</Text>
              </Flex>

              <Flex flexDirection={'column'} alignItems='center' justifyContent={'center'}>
                <Text fontSize={'1.5rem'} fontWeight='medium' color='yellow.600'>60</Text>
                <Text>línguas</Text>
              </Flex>

              <Flex flexDirection={'column'} alignItems='center' justifyContent={'center'}>
                <Text fontSize={'1.5rem'} fontWeight='medium' color='yellow.600'>27</Text>
                <Text>cidades +100</Text>
              </Flex>
            </HStack>
            </Box>
          </Flex>


        </Flex>
      </Flex>

      <Flex 
        w="100vw" justifyContent={'center'}
      >
        <Flex w="80vw" pt='2rem' pb='2rem' gap='1' flexDirection='column'>
          <Text fontWeight={'700'} fontSize='2rem' color='gray.600'>Cidades +100</Text>
          <Flex flexWrap={'wrap'} justifyContent={'space-between'} width='100%'>
            <Box boxSize={'21%'}>
              <Image alt='' src={Londres} />
            </Box>

            <Box boxSize={'21%'}>
              <Image alt='' src={Paris} />
            </Box>

            <Box boxSize={'21%'}>
              <Image alt='' src={Roma} />
            </Box>

            <Box boxSize={'21%'} mb='1rem'>
              <Image alt='' src={Praga} />
            </Box>

            <Box boxSize={'21%'}>
              <Image alt='' src={Amsterda} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}
