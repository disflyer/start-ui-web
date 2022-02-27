import React from 'react';

import { Box, Heading } from '@chakra-ui/react';
import { css } from '@emotion/css';
import thunderbird_01 from 'assets/thunderbird_01.jpg';
import Image from 'next/image';
import 'swagger-ui-react/swagger-ui.css';

import { Page, PageContent } from '@/app/layout';

import { AboutNav } from '../AboutNav';

export const US = () => {
  return (
    <Page containerSize="xl" nav={<AboutNav />}>
      <PageContent>
        <Box borderRadius="md">
          <Heading>About ThunderBird</Heading>
          <div
            className={css`
              display: flex;
              justify-content: center;
              margin-top: 50px;
            `}
          >
            <Image width={200} height={200} src={thunderbird_01}></Image>
          </div>
          <div
            className={css`
              margin-top: 20px;
              font-size: 18px;
              color: gray;
            `}
          >
            <p>
              THUNDERBIRDS.ME INC) is a global (Fin Tech) mixed reality, meta
              verse solution & tool provider with global headquarter located in
              downtown Princeton, right next to Princeton University. It is a
              high-tech innovation startup that incubated and spin off from
              Skyline Technology. The team members are composed of Silicon
              Valley-Wall Street, IT elites in the investment banking industry
              and many top laborers. It is jointly formed by scarce talents with
              artificial intelligence, mixed reality, and intelligent
              human-computer interaction research & development backgrounds
              (such as Columbia University, Princeton University).
            </p>
            <p>
              The main scope of the focus include (but not limited to): serving
              various large enterprise and institutional clients with smart
              digital transformation, high-efficiency-safety & optimized
              innovations, develop - build - provide Meta Verse ecosystem
              interfaces, standards establishment, and collaboration with
              mainstream clients & partners to establish Meta Verse ecological
              elements.
            </p>
            <p>
              Thunderbird has already begun for promotion & deployment in US and
              Japan territory. With advanced technologies and high-quality
              products & services to benefit the world in mind, we are committed
              to the establishment, formation, industrialization, and
              industrialization of the meta verse ecosystem, geared towards to
              become a leading brand in the industry.
            </p>
          </div>
        </Box>
      </PageContent>
    </Page>
  );
};
