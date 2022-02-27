import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { css } from '@emotion/css';
import Email from 'assets/Email.svg';
import LocationSVG from 'assets/Location.svg';
import Phone from 'assets/Phone.svg';
import Image from 'next/image';

import { Page, PageContent } from '@/app/layout';
import { useDarkMode } from '@/hooks/useDarkMode';

import { AboutNav } from '../AboutNav';

const Contact = () => {
  const { colorModeValue } = useDarkMode();

  return (
    <Page containerSize="xl" nav={<AboutNav />}>
      <PageContent>
        <Box bg={colorModeValue('transparent', 'gray.200')} borderRadius="md">
          <Heading>Interested in our research or have questions?</Heading>
          <Flex
            className={css`
              justify-content: center;
              flex-direction: column;
              margin-left: 100px;
              margin-top: 50px;
              > div {
                margin-top: 50px;
              }
            `}
          >
            <Flex>
              <Image width={50} height={50} src={Phone} />
              <Box ml="3">
                <Text
                  fontWeight="bold"
                  className={css`
                    font-size: 20px;
                  `}
                >
                  Phone Number
                </Text>
                <Text
                  fontSize="sm"
                  className={css`
                    font-size: 18px;
                  `}
                >
                  +1 (917) 519-3250
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Image width={50} height={50} src={Email} />
              <Box ml="3">
                <Text
                  fontWeight="bold"
                  className={css`
                    font-size: 20px;
                  `}
                >
                  Email
                </Text>
                <Text
                  fontSize="sm"
                  className={css`
                    font-size: 18px;
                  `}
                >
                  info@skylinetech.ai
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Image width={50} height={50} src={LocationSVG} />
              <Box ml="3">
                <Text
                  fontWeight="bold"
                  className={css`
                    font-size: 20px;
                  `}
                >
                  Location
                </Text>
                <Text
                  fontSize="sm"
                  className={css`
                    font-size: 18px;
                  `}
                >
                  7 Witherspoon Street, Princeton, NJ 08542, United States
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </PageContent>
    </Page>
  );
};

export default Contact;
