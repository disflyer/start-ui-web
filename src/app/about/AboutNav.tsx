import React from 'react';

import { PhoneIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { FiUsers } from 'react-icons/fi';
import { GoBook } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components';

export const AboutNav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = (to) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('about:nav.about')}>
        <NavItem
          as={Link}
          to="/about/us"
          isActive={isActive('/about/us')}
          // icon={FiUsers}
        >
          us
        </NavItem>
        <NavItem
          as={Link}
          to="/about/team"
          isActive={isActive('/about/team')}
          // icon={GoBook}
        >
          team
        </NavItem>
        <NavItem
          as={Link}
          to="/about/partners"
          isActive={isActive('/about/partners')}
          // icon={GoBook}
        >
          partners
        </NavItem>
        <NavItem
          as={Link}
          to="/about/contact"
          isActive={isActive('/about/contact')}
          // icon={PhoneIcon}
        >
          contact
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
