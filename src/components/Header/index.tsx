import React from 'react';

import { Button, Flex, Heading } from '@chakra-ui/react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Logo from '../../../public/assets/Logo.png'
import Image from 'next/image';

interface IHeaderProps {
  buttonBack?: boolean
  href?: string
}

export const Header: React.FC<IHeaderProps> = ({ buttonBack = false, href }) => {
  return (
    <Flex 
      width={'100%'} 
      h='24' 
      justify='center' 
      alignItems={'center'} 
      position={'relative'}
    >
        {buttonBack && (
          <Button position={'absolute'} left='6rem' bg='white' >
              <a href={href}>
                <MdOutlineArrowBackIosNew /> 
              </a>
          </Button>
        )}
        <Image priority width={180} height={20} src={Logo} alt='Logo' />
    </Flex>
  )
}
