import { Box, Center, Divider, Flex, HStack, Img, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Banner from '../../../public/assets/Banner.svg'
import CockTail from '../../../public/assets/cocktail 1.svg'
import Surf from '../../../public/assets/surf 1.svg'
import Building from '../../../public/assets/building 1.svg'
import Museum from '../../../public/assets/museum 1.svg'
import Earth from '../../../public/assets/earth 1.svg'
import Continents from '../../../public/assets/continents.png'
import Item from './Item';
import { Stack } from '@chakra-ui/react';


const Content: React.FC = () => {
  return (
    <Flex w='100vw'  flexDirection={'column'} justifyContent={'center'}>
        <Image alt='' src={Banner} sizes="100vw" />
        
        <Flex 
          w='100vw' 
          justifyContent={'center'}
          alignItems={'center'}
          mt='12'
        >
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
              <Item icon={CockTail} name='Vida noturna' />
              <Item icon={Surf} name='Praia' />
              <Item icon={Building} name='Moderno' />
              <Item icon={Museum} name='Classico' />
              <Item icon={Earth} name='e mais...' />
          </HStack>
        </Flex>

        <Flex justifyContent={'center'}>
          <Divider width={'20'} height={'1'} borderRadius='20' bg='gray'  />
        </Flex>

        <Flex 
          w='100vw' 
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Stack spacing={['2']} alignItems={'center'} mt='3' maxWidth={'978px'}>
            <Text fontWeight={'600'} fontSize={'xl'}>Vamos nessa?</Text>
            <Text fontWeight={'600'} fontSize={'xl'}>Então escolha seu continente</Text>
          </Stack>
        </Flex>

        <Flex 
          w='100vw' 
          justifyContent={'center'}
          alignItems={'center'}
          mt='12'
        >
          <Box maxWidth={'978px'}>
            <a href="/continent/europa">
              <Image style={{ cursor: 'pointer' }} alt="" src={Continents} sizes="20" />
            </a>
          </Box>
        </Flex>
    </Flex>
  )
}

export default Content;