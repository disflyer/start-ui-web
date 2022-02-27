import React from 'react';

import { Box, Heading } from '@chakra-ui/react';
import { css } from '@emotion/css';

import { Page, PageContent } from '@/app/layout';
import { useDarkMode } from '@/hooks/useDarkMode';

import { AboutNav } from '../AboutNav';

const Team = () => {
  const { colorModeValue } = useDarkMode();

  return (
    <Page containerSize="xl" nav={<AboutNav />}>
      <PageContent>
        <Box bg={colorModeValue('transparent', 'gray.200')} borderRadius="md">
          <Heading>About Team</Heading>
          <div
            className={css`
              h3 {
                font-weight: bold;
                margin: 20px 0;
              }
            `}
          >
            <h3>sponsored by Skyline Technology USA LLC</h3>
            <h3>DR. CARMINE ELVEZIO</h3>
            <p>
              Dr. Elvezio is a research scientist and engineer working with
              AR/VR/MR and 3D graphics, interactions and visualization
              techniques, developing 3D systems across several domains including
              medicine, remote maintenance, space, music, and rehabilitation,
              working with many technologies including Microsoft HoloLens,
              Oculus Rift, Unt, Unreal, and OpenGL.
            </p>
            <p>
              He obtained his PhD from the Computer Graphics and User Interfaces
              Lab at Columbia University, studying AR/VR/MR and 3D graphics,
              interactions and visualization techniques, under the supervision
              of Prof. Steven Feiner.
            </p>
            <h3>DR. JEN-SHUO LIU</h3>
            <h3>
              Dr. Jen-Shuo Liu is a CS PhD candidate at Columbia University.
            </h3>
            <p>
              His research focuses on user interface design for augmented
              reality and virtual reality. He is investing the impact of visual
              cues on task performance in AR and VR tasks using eye-tracking. He
              is also building a VR user interface to assign works to roots for
              remote manufacturing.
            </p>
            <h3>MAN XUEYING</h3>
            <h3>
              Miss. Man Xueying is a 2nd year M.S. CS student at Columbia
              University.
            </h3>
            <p>
              Her research focuses on developing XR applications to promote
              visualization, communication, and interaction. As a member in CGUI
              Lab, she has developed various applications for Oculus Quest,
              Microsoft Hololens, NReal, Varjo XR3, HTC Vive, and many other XR
              products across different domains including medical training,
              geographical study, non-visual cues or journalism and financial
              communication.
            </p>
            <p>
              As a part of the Thunderbird team, she is working on the design
              and implementation of novel 3D user interactions on Hololens2 and
              NReal using Unity.
            </p>
          </div>
        </Box>
      </PageContent>
    </Page>
  );
};

export default Team;
