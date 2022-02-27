import React from 'react';

import { css } from '@emotion/css';
import logoImg from 'assets/thunderbirdlogo400x404.png';
import Image from 'next/image';

export const Logo = ({ ...rest }) => {
  return (
    <div>
      <Image
        className={css`
          background-color: rgb(248, 249, 250);
          border-radius: 50%;
        `}
        width={50}
        height={50}
        src={logoImg}
      ></Image>
    </div>
  );
};
