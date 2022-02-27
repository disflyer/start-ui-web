import React from 'react';

import { Box, Heading } from '@chakra-ui/react';
import { css } from '@emotion/css';
import Image from 'next/image';

import { Page, PageContent } from '@/app/layout';
import { useDarkMode } from '@/hooks/useDarkMode';

import { AboutNav } from '../AboutNav';

const Partners = () => {
  const { colorModeValue } = useDarkMode();

  return (
    <Page containerSize="xl" nav={<AboutNav />}>
      <PageContent>
        <Box bg={colorModeValue('transparent', 'gray.200')} borderRadius="md">
          <Heading>Partners</Heading>
          <div
            className={css`
              h2 {
                font-weight: bold;
                margin-top: 20px;
              }
            `}
          >
            <h2>Strategic Partners that we are actively collaborating with:</h2>
            <div
              className={css`
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
                align-items: center;
                & span {
                  margin-left: 10px !important;
                }
              `}
            >
              <Image
                width={150}
                height={36}
                src={require('../../../../assets/partners/Nreal.png')}
              ></Image>
              <Image
                width={150}
                height={72}
                src={require('../../../../assets/partners/Plymouth.jpeg')}
              ></Image>
              <Image
                width={150}
                height={52}
                src={require('../../../../assets/partners/Symphony.png')}
              ></Image>
              <Image
                width={120}
                height={63}
                src={require('../../../../assets/partners/Sync.png')}
              ></Image>
              <Image
                width={150}
                height={52}
                src={require('../../../../assets/partners/Third.jpeg')}
              ></Image>
              <Image
                width={100}
                height={100}
                src={require('../../../../assets/partners//Me.jpeg')}
              ></Image>
              <Image
                width={100}
                height={58}
                src={require('../../../../assets/partners/Columbia.jpeg')}
              ></Image>
            </div>
            <h2>
              Research Partners that we are actively seeking collaborations
              with:
            </h2>
            <div
              className={css`
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                margin-top: 20px;
                & span {
                  margin-left: 10px !important;
                }
              `}
            >
              <Image
                width={270}
                height={73}
                src={require('../../../../assets/partners/Princeton.png')}
              ></Image>
              <Image
                width={300}
                height={60}
                src={require('../../../../assets/partners/Rice.png')}
              ></Image>
            </div>
            <h2>
              Corporations that we are actively collaborating or seeking
              collaborations with:
            </h2>
            <div
              className={css`
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                margin-top: 20px;
                & span {
                  margin-left: 10px !important;
                }
              `}
            >
              <Image
                width={300}
                height={67}
                src={require('../../../../assets/partners/JP.png')}
              ></Image>
              <Image
                width={100}
                height={100}
                src={require('../../../../assets/partners/Goldman.png')}
              ></Image>
              <Image
                width={110}
                height={62}
                src={require('../../../../assets/partners/Barclays.png')}
              ></Image>
              <Image
                width={200}
                height={112}
                src={require('../../../../assets/partners/Morgan.jpeg')}
              ></Image>
              <Image
                width={110}
                height={62}
                src={require('../../../../assets/partners/Deutsche.jpeg')}
              ></Image>
              <Image
                width={110}
                height={62}
                src={require('../../../../assets/partners/Merrill.png')}
              ></Image>
            </div>
          </div>
        </Box>
      </PageContent>
    </Page>
  );
};

export default Partners;
