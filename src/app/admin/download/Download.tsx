import React from 'react';

import { Box } from '@chakra-ui/react';

import { Page, PageContent } from '@/app/layout';
import { useDarkMode } from '@/hooks/useDarkMode';

import { AdminNav } from '../AdminNav';

const Download = () => {
  const { colorModeValue } = useDarkMode();
  return (
    <Page containerSize="xl" nav={<AdminNav />}>
      <PageContent>
        <Box bg={colorModeValue('transparent', 'gray.200')} borderRadius="md">
          Download
        </Box>
      </PageContent>
    </Page>
  );
};

export default Download;
